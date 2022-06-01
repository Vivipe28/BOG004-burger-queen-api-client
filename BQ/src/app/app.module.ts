import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewLoginComponent } from './components/view-login/view-login.component';
import { MenuViewComponent } from './components/menu-view/menu-view.component';
import { OrderComponent } from './order/order.component';


@NgModule({
  declarations: [
    AppComponent,
    ViewLoginComponent,
    MenuViewComponent,
    OrderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
