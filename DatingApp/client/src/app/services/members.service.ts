import { AccountService } from './account.service';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, take, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Member } from '../models/member';
import { PaginatedResult } from '../models/pagination';
import { UserParams } from '../models/userParams';
import { User } from '../models/user';


@Injectable({
  providedIn: 'root'
})
export class MembersService {
  baseUrl = environment.apiUrl;
  members: Member[] = [];
  memberCache = new Map<string, PaginatedResult<Member[]>>();
  user: User;
  userParams: UserParams;


  constructor(
    private http: HttpClient,
    private accountService: AccountService
  ) {
    accountService.currentUser$
      .pipe(take(1))
      .subscribe((user: any) => {
        this.user = user;
        this.userParams = new UserParams(user);
      });
  }


  public get UserParams(): UserParams {
    return this.userParams
  }

  public set UserParams(userParams: UserParams) {
    this.userParams = userParams;
  }

  resetUserParams() {
    this.userParams = new UserParams(this.user);
    return this.userParams;
  }

  getMembers(userParams: UserParams): Observable<PaginatedResult<Member[]>> {
    const cacheKey = Object.values(userParams).join('-');
    const response = this.memberCache.get(cacheKey);
    if (response) return of(response);

    let params = this.getPaginationParams(userParams);
    params = params.append('minAge', userParams.minAge.toString());
    params = params.append('maxAge', userParams.maxAge.toString());
    params = params.append('gender', userParams.gender);
    params = params.append('orderBy', userParams.orderBy);

    return this.getPaginatedResult<Member[]>(`${this.baseUrl}users`, params)
      .pipe(
        tap(res => this.memberCache.set(cacheKey, res))
      );
  }

  private getPaginatedResult<T>(url: string, params: HttpParams): Observable<PaginatedResult<T>> {
    const paginatedResult: PaginatedResult<T> = new PaginatedResult<T>();

    return this.http.get<T>(url,
      {
        observe: 'response',
        params
      }).pipe(
        map((res: HttpResponse<T>) => {
          paginatedResult.result = res.body as T;
          if (res.headers.get('Pagination') !== null) {
            paginatedResult.pagination = JSON.parse(res.headers.get('Pagination') || '');
          }
          return paginatedResult;
        })
      );
  }

  getMember(username: string): Observable<Member> {

    // const member = this.members.find(x => x.username === username);
    // if (member) {
    //   return of(member);
    // }
    const members = [...this.memberCache.values()];
    const allMembers = members.reduce((arr: Member[], elem: PaginatedResult<Member[]>) => arr.concat(elem.result), []);
    const foundMember = allMembers.find(m => m.username === username)

    if (foundMember) return of(foundMember);

    return this.http.get<Member>(`${this.baseUrl}users/${username}`)
  }

  updateMember(member: Member) {
    return this.http.put(`${this.baseUrl}users`, member).pipe(
      tap(_ => {
        const index = this.members.findIndex(x => x.id === member.id);
        this.members[index] = member;
      })
    )
  }

  setMainPhoto(photoId: number): Observable<any> {
    return this.http.put(`${this.baseUrl}users/set-main-photo/${photoId}`, {});
  }

  deletePhoto(photoId: number) {
    return this.http.delete(`${this.baseUrl}users/delete-photo/${photoId}`);
  }

  private getPaginationParams({ pageNumber, pageSize }: UserParams) {

    let params = new HttpParams();
    params = params.append('pageNumber', pageNumber.toString());
    params = params.append('pageSize', pageSize.toString());
    return params;
  }

}
