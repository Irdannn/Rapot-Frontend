import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SidebarComponents } from './components/sidebar/sidebar.component';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { SignupComponent } from './components/signup/signup.component';
import { AuthGuard } from './guards/auth.guard';
import { DashboardAdminComponent } from './components/dashboard-admin/dashboard-admin.component';
import { EditProfileComponent } from './components/edit-profile/edit-profile.component';
import { AvatarComponent } from './components/avatar/avatar.component';

const routes: Routes = [
  {path:'', redirectTo:'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'dashboard', component: DashboardAdminComponent, canActivate:[AuthGuard]},
  {path: 'header', component: SidebarComponents, canActivate:[AuthGuard]},
  {path: 'profile/:id', component: ProfileComponent, canActivate:[AuthGuard]},
  {path: 'editprofile/:id', component: EditProfileComponent, canActivate:[AuthGuard]},
  {path: 'avatar/:id', component: AvatarComponent, canActivate:[AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
