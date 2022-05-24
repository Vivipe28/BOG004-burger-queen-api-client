import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewLoginComponent } from './view-login/view-login.component';
import { MenuViewComponent } from './menu-view/menu-view.component';

@NgModule({
  declarations: [
    AppComponent,
    ViewLoginComponent,
    MenuViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
