import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewLoginComponent } from './components/view-login/view-login.component';
import { MenuViewComponent } from './components/menu-view/menu-view.component';
import { OrderComponent } from './order/order.component';
import { InterceptorService } from './interceptors/interceptor.service';
import { ViewChefComponent } from './components/view-chef/view-chef.component';
import { ViewAdminComponent } from './components/view-admin/view-admin.component';
import { Page404Component } from './components/page404/page404.component';




@NgModule({
  declarations: [
    AppComponent,
    ViewLoginComponent,
    MenuViewComponent,
    OrderComponent,
    ViewChefComponent,
    ViewAdminComponent,
    Page404Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    BrowserAnimationsModule,
  ],
  providers: [
    {
      provide:HTTP_INTERCEPTORS,
      useClass:InterceptorService,
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
