import { Pagination } from './../models/pagination';
import { MembersService } from 'src/app/services/members.service';
import { Component, OnInit } from '@angular/core';
import { Member } from '../models/member';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.css']
})
export class ListsComponent implements OnInit {
  members: Partial<Member>[] = [];
  predicate = 'liked';
  pageNumber = 1;
  pageSize = 5;
  pagination:Pagination;

  constructor(private membersService: MembersService) { }

  ngOnInit() {
    this.loadLikes();
  }

  loadLikes(){
    this.membersService.getLikes(this.predicate, this.pageNumber, this.pageSize).subscribe(members => {
      this.members = members.result;
      this.pagination = members.pagination;
    })
  }

  pageChanged(event: any) {
    this.pageNumber = event.page;
    this.loadLikes();
  }

}
