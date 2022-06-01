import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ViewLoginComponent} from './components/view-login/view-login.component';
import {MenuViewComponent} from './components/menu-view/menu-view.component';
import { AuthGuard } from './shared/auth.guard';

const routes: Routes = [
  {path:'', redirectTo: 'login', pathMatch: 'full'},
  {path:'login', component: ViewLoginComponent},
  {path:'menu', component: MenuViewComponent, canActivate:[AuthGuard]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }
