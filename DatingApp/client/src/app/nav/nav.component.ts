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

<<<<<<< HEAD
  constructor(private accountService: AccountService,
    private router: Router,
    private toster: ToastrService
    ) {
=======
  constructor(
    private accountService: AccountService,
    private router: Router,
    private toastr: ToastrService
    ) {

>>>>>>> 6c0a1ae2a6009a3100d8c1021599012ab47dab21
    this.currentUser$ = this.accountService.currentUser$;
  }

  ngOnInit(): void {

  }

  logout() {
    this.router.navigateByUrl('/');
    this.accountService.logout();
    this.router.navigateByUrl('/');

  }

  login() {
    this.accountService.login(this.model)
    .subscribe(response => {
      this.router.navigateByUrl('/members');
      console.log(response);
    }, error => {
<<<<<<< HEAD
      this.toster.error(error.error);
=======
      this.toastr.error(error.error)
>>>>>>> 6c0a1ae2a6009a3100d8c1021599012ab47dab21
      console.log('Failed to login', error);
    }, () => {
      console.log('Login complete');
    });
  }


}
