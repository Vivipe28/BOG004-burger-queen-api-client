import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ViewLoginComponent} from './components/view-login/view-login.component';
import {MenuViewComponent} from './components/menu-view/menu-view.component';
import { ViewChefComponent } from './components/view-chef/view-chef.component'
import { ViewAdminComponent } from './components/view-admin/view-admin.component'
import { AuthGuard } from './shared/auth.guard';
import { SecureInnerPagesGuard } from './shared/secure-inner-pages.guard';

const routes: Routes = [
  {path:'', redirectTo: 'login', pathMatch: 'full'},
  {path:'login', component: ViewLoginComponent},
  {path:'menu', component: MenuViewComponent, canActivate:[AuthGuard]},
  {path:'chef', component: ViewChefComponent, canActivate:[SecureInnerPagesGuard]},
  {path:'admin', component: ViewAdminComponent, canActivate:[SecureInnerPagesGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }
