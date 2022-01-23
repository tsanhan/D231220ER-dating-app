import { TestErrorsComponent } from './errors/test-errors/test-errors.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListsComponent } from './lists/lists.component';
import { MessagesComponent } from './messages/messages.component';
import { AuthGuard } from './guards/auth.guard';
import { NotFaundComponent } from './errors/not-faund/not-faund.component';
import { ServerErrorComponent } from './errors/server-error/server-error.component';

const routes: Routes = [
  {
    path: '',// localhost:4200/
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: '' ,
    canActivate: [AuthGuard],
    runGuardsAndResolvers: 'always',
    children: [
      {
        path: 'members',
        loadChildren: () => import('./modules/members.module').then(m => m.MembersModule)
      },
      {path: 'lists', component: ListsComponent},
      {path: 'messages',component: MessagesComponent}
    ]
  },
  {
    path: 'errors' , component: TestErrorsComponent
  },
  { path: 'not-found' , component: NotFaundComponent},
  { path: 'server-error' , component: ServerErrorComponent },
  {
    path: '**', // localhost:4200/non-existing-route/asdasd/asdasd/
    pathMatch: 'full',
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], //localhost:4200/
  exports: [RouterModule]
})
export class AppRoutingModule { }
