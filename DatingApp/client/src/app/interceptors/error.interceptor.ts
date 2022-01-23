import { ToastrService } from 'ngx-toastr';
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { NavigationExtras, Router } from '@angular/router';
import { catchError } from 'rxjs/operators';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor(
    private router: Router,
    private toastr: ToastrService
  ) { }


  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request)
      .pipe(
        catchError(err => {
          switch (err.status) {
            case 400:
              if (err.error?.errors) { // {modelName: {fieldName: 'field error message}}
                const modelStateErrors: string[][] = [];

                for (const key in err.error.errors) {
                  if (err.error.errors[key]) {
                    modelStateErrors.push(err.error.errors[key]);
                  }
                }
                throw modelStateErrors.flat();
              } else {
                this.toastr.error(err.statusText === 'OK' ? "Bad Request" : err.statusText, err.status)
              }
              break;
            case 401:
              this.toastr.error(err.statusText === 'OK' ? "Unauthorized" : err.statusText, err.status)
              break;
            case 404:
              this.router.navigateByUrl('/not-found');
              break;
            case 500:
              const navigationExtras: NavigationExtras = { state: { error: err.error } };
              this.router.navigateByUrl('/server-error', navigationExtras);
              break;
            default:
              this.toastr.error("Something unexpected want wrong");
              console.log(err);
              break;
          }
          throw throwError(err);
        })
      )
  }
}
