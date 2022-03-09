import { UserParams } from './../../models/userParams';
import { Pagination } from './../../models/pagination';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Member } from 'src/app/models/member';
import { MembersService } from 'src/app/services/members.service';
import { AccountService } from 'src/app/services/account.service';
import { User } from 'src/app/models/user';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.css']
})
export class MemberListComponent implements OnInit {

  members: Member[];
  pagination: Pagination;
  userParams: UserParams;
  genderList= [{
    value: 'male',
    display: 'Males'
  },{
    value: 'female',
    display: 'Females'
  }];

  constructor(private memberService: MembersService) {
    this.userParams = this.memberService.UserParams;
  }

  ngOnInit(): void {
    this.loadMembers();
  }

  loadMembers() {
    this.memberService.UserParams = this.userParams;

    this.memberService.getMembers(this.userParams).subscribe(
      res => {
        this.members = res.result;
        this.pagination = res.pagination;
      }
    )
  }

  pageChanged({ page }: any) {
    this.userParams.pageNumber = page;
    this.memberService.UserParams = this.userParams;
    this.loadMembers();
  }

  resetFilters() {
    this.userParams = this.memberService.resetUserParams();
    this.loadMembers();
  }

}
