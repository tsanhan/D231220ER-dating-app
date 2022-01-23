import { NavigationExtras, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { catchError } from 'rxjs/operators';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor(
    private router: Router ,
    private toster: ToastrService
  ) {}


  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request)
          .pipe(
            catchError(err => {
              switch (err.status) {
                case 400:
                  if(err.error?.errors) {
                    const modelStateErrors:string[][] = [];

                    for (const key in err.error.errors) {
                      if(err.error.errors[key]) {
                        modelStateErrors.push(err.error.errors[key]);
                      }
                    }
                    throw modelStateErrors.flat();
                  } else {
                    this.toster.error(err.status === 'OK' ? "BedRequest" : err.statusText , err.status)
                  }
                  break;
                case 401:
                  this.toster.error(err.status === 'OK' ? "Unauthorized" : err.statusText , err.status)
                  break;
                case 404:
                  this.router.navigateByUrl('/not-found');
                  break;
                case 500:
                 const navigationExtras: NavigationExtras = {state: {error: err.error}}
                 this.router.navigateByUrl('/server-error' , navigationExtras);
                  break;
                  default:
                    this.toster.error("Soumting unexpected want wrong");
                    console.log(err);
                  break;
              }
              throw throwError(err);
            })
          )
  }
}
