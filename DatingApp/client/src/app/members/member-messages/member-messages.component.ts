import { MessageService } from './../../services/message.service';
import { Message } from './../../models/message';
import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-member-messages',
  templateUrl: './member-messages.component.html',
  styleUrls: ['./member-messages.component.css']
})
export class MemberMessagesComponent implements OnInit {
  @Input() username: string;
  messages: Message[];
  messageContent: string;

  constructor(public messageService: MessageService) { }

  ngOnInit() {
  }

  sendMessage(form: NgForm) {
    this.messageService.sendMessage(this.username, this.messageContent)
    .then(() => {
      form.reset();
    })

  }

}
