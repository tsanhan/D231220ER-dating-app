import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MembersService } from '../services/members.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  registerMode = false;
  users: any;

  constructor(private http: HttpClient,private membersService: MembersService) { }

  ngOnInit(): void {
    this.getUsers();
  }

  registerToggle() {
    this.registerMode = !this.registerMode
  }

  getUsers(){
    this.membersService.getMembers()
    .subscribe(
      users => this.users = users,
      error => console.log(error))
  }
  cancelRegisterMode($event: boolean){
    this.registerMode = $event;
  }
}
