import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HubConnection, HubConnectionBuilder } from '@microsoft/signalr';
import { Observable, BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Message } from '../models/message';
import { User } from '../models/user';
import { getPaginatedResult, getPaginationParams } from './paginationHelper';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  baseUrl = environment.apiUrl;
  hubUrl = environment.hubUrl;
  private hubConnection: HubConnection;
  private messageThreadSource$ = new BehaviorSubject<Message[]>([]);
  messageThread$ = this.messageThreadSource$.asObservable();

  constructor(
    private http: HttpClient
  ) { }

  createHubConnection(user: User, otherUser: string) {
    this.hubConnection = new HubConnectionBuilder()
    .withUrl(`${this.hubUrl}message?username=${otherUser}`, {
      accessTokenFactory: () => user.token
    })
    .withAutomaticReconnect()
    .build();

    this.hubConnection
    .start()
    .catch(err => console.log(err))

    this.hubConnection.on("ReceivedMessageThread", (messages: Message[]) => {
      this.messageThreadSource$.next(messages);
    });

    this.hubConnection.on("NewMessage", (message: Message) => {
      const currentMessages = this.messageThreadSource$.getValue();
      this.messageThreadSource$.next([...currentMessages, message]);
    });



  }
  stopHubConnection() {
    if (this.hubConnection) {
      this.hubConnection.stop().catch(x => console.log(x));
    }
  }

  getMessages(pageNumber: number, pageSize: number, container: string) {
    let params = getPaginationParams(pageNumber, pageSize);
    params = params.append("container", container);
    return getPaginatedResult<Message[]>(`${this.baseUrl}messages`, params, this.http);
  }


  getMessageThread(username: string) {
    return this.http.get<Message[]>(`${this.baseUrl}messages/thread/${username}`);
  }

  // sendMessage(username: string, content: string) {
  //   const createMessage = { recipientUsername: username, content };
  //   return this.http.post(this.baseUrl + 'messages', createMessage);
  // }

  deleteMessage(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}messages/${id}`);
  }

  async sendMessage(username: string, content: string){
    const createMessage = {recipientUsername: username, content};
    return await this.hubConnection.invoke("SendMessage", createMessage).catch(error => console.log(error));

  }
}
