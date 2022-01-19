<<<<<<< HEAD
import { AutoGuard } from './guards/Auto.guard';
import { MemberDetailComponent } from './members/member-detail/member-detail.component';
import { MemberListComponent } from './members/member-list/member-list.component';
=======
>>>>>>> 6c0a1ae2a6009a3100d8c1021599012ab47dab21
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListsComponent } from './lists/lists.component';
import { MessagesComponent } from './messages/messages.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: '',// localhost:4200/
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
<<<<<<< HEAD
    path: '' ,
    canActivate: [AutoGuard],
=======
    path: '',
    canActivate:[AuthGuard],
>>>>>>> 6c0a1ae2a6009a3100d8c1021599012ab47dab21
    runGuardsAndResolvers: 'always',
    children: [
      {
        path: 'members',
        loadChildren: () => import('./modules/members.module').then(m => m.MembersModule)
      },
<<<<<<< HEAD
      {path: 'lists', component: ListsComponent},
      {path: 'messages',component: MessagesComponent}
    ]
  },
  {
    path: '**', // localhost:4200/non-existing-route/asdasd/asdasd/
=======
      {path: 'lists',component: ListsComponent},
      {path: 'messages',component: MessagesComponent},
    ]
  },
  {
    path: '**',
>>>>>>> 6c0a1ae2a6009a3100d8c1021599012ab47dab21
    pathMatch: 'full',
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], //localhost:4200/
  exports: [RouterModule]
})
export class AppRoutingModule { }
