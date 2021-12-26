import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'The Dating App';
  users: any;

  constructor(private http: HttpClient) {

  }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.http.get('https://localhost:5001/api/users').subscribe(res => {
      this.users = res; //WTF is? CORS?!?!?!?
    },
    err => {
      console.log(err);
    },
    () => {
      console.log('Users Loaded');
    });
    //   {
    //   next: (data) => {
    //     this.users = data;
    //   },
    //   error: (err) => {
    //     console.log(err);
    //   },
    //   complete: () => {
    //     console.log('complete');
    //   }
    // }
    // );

  }


}
