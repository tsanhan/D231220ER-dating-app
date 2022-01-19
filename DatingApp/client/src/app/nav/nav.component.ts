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
  // loggedIn: boolean = false;
  currentUser$: Observable<User | null>;

  constructor(private accountService: AccountService,
    private router: Router,
    private toster: ToastrService
    ) {
    this.currentUser$ = this.accountService.currentUser$;
  }

  ngOnInit(): void {

  }
  logout() {
    this.accountService.logout();
    this.router.navigateByUrl('/');

  }

  login() {
    this.accountService.login(this.model)
    .subscribe(response => {
      this.router.navigateByUrl('/members');
      console.log(response);
    }, error => {
      this.toster.error(error.error);
      console.log('Failed to login', error);
    }, () => {
      console.log('Login complete');
    });
  }


}
