<<<<<<< HEAD
import { Router, Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MemberListComponent } from '../members/member-list/member-list.component';
import { MemberDetailComponent } from '../members/member-detail/member-detail.component';

const routes: Routes = [
  {path: 'members',component: MemberListComponent},
  {path: 'members/:id',component: MemberDetailComponent}
=======
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MemberDetailComponent } from '../members/member-detail/member-detail.component';
import { MemberListComponent } from '../members/member-list/member-list.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: MemberListComponent, pathMatch: 'full' },
  { path: ':id', component: MemberDetailComponent },
>>>>>>> 6c0a1ae2a6009a3100d8c1021599012ab47dab21
]

@NgModule({
  declarations: [
    MemberListComponent,
<<<<<<< HEAD
    MemberDetailComponent
=======
    MemberDetailComponent,
>>>>>>> 6c0a1ae2a6009a3100d8c1021599012ab47dab21
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
<<<<<<< HEAD
  exports:[
    RouterModule,
    MemberListComponent,
    MemberDetailComponent
=======
  exports: [

    RouterModule,
    MemberListComponent,
    MemberDetailComponent,
>>>>>>> 6c0a1ae2a6009a3100d8c1021599012ab47dab21
  ]
})
export class MembersModule { }
