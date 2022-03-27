import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Message } from '../models/message';
import { getPaginatedResult, getPaginationParams } from './paginationHelper';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  baseUrl = environment.apiUrl;
  constructor(
    private http: HttpClient
  ) { }

  getMessages(pageNumber:number, pageSize:number, container: string) {
    let params = getPaginationParams(pageNumber, pageSize);
    params = params.append("container", container);
    return getPaginatedResult<Message[]>(`${this.baseUrl}messages`, params, this.http);
  }
}