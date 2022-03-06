import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { AccountService } from '../services/account.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model: any = {};
  currentUser$: Observable<User | null>;

  constructor(
    private accountService: AccountService,
    private router: Router,
    private toastr: ToastrService
    ) {

    this.currentUser$ = this.accountService.currentUser$;

  }

  ngOnInit(): void {

  }

  logout() {
    this.router.navigateByUrl('/');
    this.accountService.logout();
  }

  login() {
    this.accountService.login(this.model)
    .subscribe(response => {
      this.router.navigateByUrl('/members');
      console.log(response);
    });
  }


}
