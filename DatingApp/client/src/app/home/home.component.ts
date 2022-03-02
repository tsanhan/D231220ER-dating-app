import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MembersService } from '../services/members.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  registerMode = false;
  users: any;

  constructor(private membersService: MembersService) { }


  registerToggle() {
    this.registerMode = !this.registerMode
  }

  cancelRegisterMode($event: boolean){
    this.registerMode = $event;
  }
}
