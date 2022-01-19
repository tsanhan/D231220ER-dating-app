import { CoreModule } from './modules/core.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './nav/nav.component';
import { FormsModule } from '@angular/forms';
<<<<<<< HEAD

=======
>>>>>>> 6c0a1ae2a6009a3100d8c1021599012ab47dab21
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { ListsComponent } from './lists/lists.component';
import { MessagesComponent } from './messages/messages.component';
<<<<<<< HEAD
import { TestModule } from './modules/test.module';


=======
import { CoreModule } from './modules/core.module';
>>>>>>> 6c0a1ae2a6009a3100d8c1021599012ab47dab21


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    RegisterComponent,
<<<<<<< HEAD
=======

>>>>>>> 6c0a1ae2a6009a3100d8c1021599012ab47dab21
    ListsComponent,
    MessagesComponent,
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
