<<<<<<< HEAD
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
=======
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
>>>>>>> 6c0a1ae2a6009a3100d8c1021599012ab47dab21
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  imports: [
    CommonModule,
    BsDropdownModule.forRoot(),
    ToastrModule.forRoot({
<<<<<<< HEAD
      positionClass: 'toast-botton-right'
=======
      positionClass: 'toast-bottom-right'
>>>>>>> 6c0a1ae2a6009a3100d8c1021599012ab47dab21
    })
  ],
  exports: [
    BsDropdownModule,
    ToastrModule
  ],
<<<<<<< HEAD
=======

>>>>>>> 6c0a1ae2a6009a3100d8c1021599012ab47dab21
  declarations: []
})
export class CoreModule { }
