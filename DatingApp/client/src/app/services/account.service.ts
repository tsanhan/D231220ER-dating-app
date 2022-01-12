import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { map } from "rxjs/operators";
import { User } from '../models/user';
@Injectable({
  providedIn: 'root'
})
export class AccountService {

  baseUrl = 'https://localhost:5001/api/';
  constructor(private http: HttpClient) { }

  private currentUserSource$ = new ReplaySubject<User | null>(1);
  currentUser$ = this.currentUserSource$.asObservable();



  login(model: any) {
    return this.http.post<User>(this.baseUrl + 'account/login', model)
      .pipe(
        map((response: User) => {
          const user = response;
          if (user) {
            localStorage.setItem('user', JSON.stringify(user));
            this.currentUserSource$.next(user);
          }
        }));
  }


  setCurrentUser(user: User) {
    this.currentUserSource$.next(user);
  }

  logout() {
    localStorage.removeItem('user');
    this.currentUserSource$.next();
  }

  register(model: any) {
    return this.http.post<User>(this.baseUrl + 'account/register', model)
      .pipe(
        map((user: User) => {
          if(user){
            localStorage.setItem('user', JSON.stringify(user));
            this.currentUserSource$.next(user);
          }
          return user;
        })
      )
  }
}
