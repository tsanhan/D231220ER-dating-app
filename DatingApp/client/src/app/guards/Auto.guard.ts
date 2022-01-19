import { map } from 'rxjs/operators';
import { AccountService } from './../services/account.service';
import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class AutoGuard implements CanActivate{
  constructor(
    private accountService: AccountService,
    private toastr: ToastrService
  ) {}
  canActivate(): Observable<boolean> {
    return this.accountService.currentUser$.pipe(
      map(user=> {
        if (user) return true;
        this.toastr.error('You Shall Not Pass ');
        return false;
      })
    )
  }
}
