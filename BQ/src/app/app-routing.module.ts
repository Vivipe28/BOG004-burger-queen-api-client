import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ViewLoginComponent} from './view-login/view-login.component';
import {MenuViewComponent} from './menu-view/menu-view.component';

const routes: Routes = [
  {path:'', redirectTo: 'login', pathMatch: 'full'},
  {path:'login', component: ViewLoginComponent},
  {path:'menu', component: MenuViewComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
