import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { AuthService } from 'src/app/services/auth.service';
import { UserStoreService } from 'src/app/services/user-store.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  menuOpen = false;
  
  public users:any = [];
  public role!:string;

  public id:string = "";
  public username:string = "";
  public fullName:string = "";
  constructor(
    private api : ApiService, 
    private auth: AuthService, 
    private userStore: UserStoreService, 
    private router: Router) { }


  ngOnInit() {
    this.api.getUsers()
    .subscribe(res=>{
      this.users = res;
    })

    this.userStore.getFullNameFromStore()
    .subscribe(val=>{
      let fullNameFromToken = this.auth.getfullNameFromToken();
      this.fullName = val || fullNameFromToken;
    })

    this.userStore.getFullNameFromStore()
    .subscribe(val=>{
      const roleRoleFromToken = this.auth.getRoleFromToken();
      this.role = val || roleRoleFromToken
    });

    this.userStore.getIDFromStore()
    .subscribe(val=>{
      let idFromToken = this.auth.getIdFromToken()
      this.id=val || idFromToken;
    })

    this.userStore.getuserNameFromStore()
    .subscribe(val=>{
      let usernameFromToken = this.auth.getUsernameFromToken()
      this.username=val || usernameFromToken;
    })
  }

  logout() {
    this.auth.signOut();
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
}