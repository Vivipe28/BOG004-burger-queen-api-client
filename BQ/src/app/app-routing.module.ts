import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ViewLoginComponent} from './components/view-login/view-login.component';
import {MenuViewComponent} from './components/menu-view/menu-view.component';
import { ViewChefComponent } from './components/view-chef/view-chef.component'
import { ViewAdminComponent } from './components/view-admin/view-admin.component'
import { AuthGuard } from './shared/auth.guard';
import { SecureInnerPagesGuard } from './shared/secure-inner-pages.guard';
import { Page404Component } from './components/page404/page404.component';

const routes: Routes = [
  {path:'', redirectTo: 'login', pathMatch: 'full'},
  {path:'login', component: ViewLoginComponent},
  {path:'menu', component: MenuViewComponent, canActivate:[AuthGuard, SecureInnerPagesGuard], data: {roles:"waiter"}},
  {path:'chef', component: ViewChefComponent, canActivate:[AuthGuard, SecureInnerPagesGuard], data: {roles: "chef"}},
  {path:'admin', component: ViewAdminComponent, canActivate:[AuthGuard, SecureInnerPagesGuard], data: {roles:"admin"}},
  {path:'error', component: Page404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }
