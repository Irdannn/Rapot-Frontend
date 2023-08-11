import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule} from '@angular/material/menu';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgToastModule  } from 'ng-angular-popup';
import { TokenInterceptor } from './interceptors/token.interceptor';
import { JwtHelperService } from '@auth0/angular-jwt';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { SidebarComponents } from './components/sidebar/sidebar.component';
import { ProfileComponent } from './components/profile/profile.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { DashboardAdminComponent } from './components/dashboard-admin/dashboard-admin.component';
import { EditProfileComponent } from './components/edit-profile/edit-profile.component';
import { AvatarComponent } from './components/avatar/avatar.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    SidebarComponents,
    ProfileComponent,
    HeaderComponent,
    FooterComponent,
    DashboardAdminComponent,
    EditProfileComponent,
    AvatarComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgToastModule,
    MatToolbarModule,
    MatSidenavModule,
    MatGridListModule,
    MatMenuModule,
    MatDialogModule,
    FormsModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
