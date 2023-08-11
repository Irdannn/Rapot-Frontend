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
import { DaftarSiswaComponent } from './components/daftar-siswa/daftar-siswa.component';
import { DaftarWaliComponent } from './components/daftar-wali/daftar-wali.component';
import { InputNilaiComponent } from './components/input-nilai/input-nilai.component';
import { TutorialComponent } from './components/tutorial/tutorial.component';
import { RapotComponent } from './components/rapot/rapot.component';
import { PembayaranComponent } from './components/pembayaran/pembayaran.component';

const routes: Routes = [
  {path:'', redirectTo:'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'dashboard', component: DashboardAdminComponent, canActivate:[AuthGuard]},
  {path: 'header', component: SidebarComponents, canActivate:[AuthGuard]},
  {path: 'profile/:id', component: ProfileComponent, canActivate:[AuthGuard]},
  {path: 'editprofile/:id', component: EditProfileComponent, canActivate:[AuthGuard]},
  {path: 'avatar/:id', component: AvatarComponent, canActivate:[AuthGuard]},
  {path: 'daftar-siswa', component: DaftarSiswaComponent, canActivate: [AuthGuard]},
  {path: 'daftar-wali', component: DaftarWaliComponent, canActivate: [AuthGuard]},
  {path: 'input-nilai', component: InputNilaiComponent, canActivate: [AuthGuard]},
  {path: 'tutorial', component: TutorialComponent, canActivate: [AuthGuard]},
  {path: 'rapot', component: RapotComponent, canActivate: [AuthGuard]},
  {path: 'pembayaran', component: PembayaranComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
