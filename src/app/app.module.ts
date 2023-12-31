import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RegComponent } from './reg/reg.component';
import { AuthComponent } from './auth/auth.component';
import { BooksComponent } from './books/books.component';
import { RouterModule, Routes } from '@angular/router'

import { FormsModule } from '@angular/forms';
//import { FlashMessagesModule} from 'angular2-flash-messages';
import { AuthService } from './auth.service';
import { HttpClientModule } from '@angular/common/http';
import { OrderComponent } from './order/order.component';

const appRoute: Routes = [
  {path: '', component:BooksComponent},
  {path: 'reg', component:RegComponent},
  {path: 'auth', component:AuthComponent},
  {path: 'order', component:OrderComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RegComponent,
    AuthComponent,
    BooksComponent,
    OrderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoute),
    FormsModule,
    //FlashMessagesModule.forRoot(),
    HttpClientModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
