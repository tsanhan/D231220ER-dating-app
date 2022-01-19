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
    path: '',
    canActivate:[AuthGuard],
    runGuardsAndResolvers: 'always',
    children: [
      {
        path: 'members',
        loadChildren: () => import('./modules/members.module').then(m => m.MembersModule)
      },
      {path: 'lists',component: ListsComponent},
      {path: 'messages',component: MessagesComponent},
    ]
  },
  {
    path: '**',
    pathMatch: 'full',
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], //localhost:4200/
  exports: [RouterModule]
})
export class AppRoutingModule { }
