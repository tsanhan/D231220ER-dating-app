import { ToastrService } from 'ngx-toastr';
import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { Member } from 'src/app/models/member';
import { MembersService } from 'src/app/services/members.service';

@Component({
  selector: 'app-member-card',
  templateUrl: './member-card.component.html',
  styleUrls: ['./member-card.component.css']
})
export class MemberCardComponent implements OnInit {
  @Input() member!: Member;

  constructor(
    private memberService:MembersService,
    private tastr: ToastrService
  ) { }


  ngOnInit(): void {

  }

  addLike(member: Member){
    this.memberService.addLike(member.username).subscribe(() => {
      this.tastr.success(`You liked: ${member.knownAs}`);
    })
  }

}
