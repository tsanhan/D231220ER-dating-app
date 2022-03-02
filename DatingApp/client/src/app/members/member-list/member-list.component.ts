import { Pagination } from './../../models/pagination';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Member } from 'src/app/models/member';
import { MembersService } from 'src/app/services/members.service';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.css']
})
export class MemberListComponent implements OnInit {

  members: Member[];
  pagination: Pagination;
  pageNumber: number = 1;
  pageSize: number = 5;

  constructor(private memberService: MembersService) { }

  ngOnInit(): void {
    this.leadMembers();
  }

  leadMembers() {
    this.memberService.getMembers(this.pageNumber, this.pageSize).subscribe(
      res => {
        this.members = res.result;
        this.pagination = res.pagination;
      }
    )
  }



}
