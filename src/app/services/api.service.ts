import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserProfile } from '../models/userProfile';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl: string = 'http://localhost:8000/api/auth/profile';
  private userUrl: string = 'http://localhost:8000/api/user/';
  private avatarUrl: string = 'http://localhost:8000/api/foto/';

  constructor( private http: HttpClient) {}

  getUsers() {
    return this.http.get<any>(this.baseUrl);
  }

  getUserProfile(id:string) {
    return this.http.get<any>(`${this.userUrl}showuser/` + id);
  }

  getAvatar(id:any){
    return this.http.get<any>(`${this.avatarUrl}get/${id}`);
  }

  // http://localhost:8000/api/foto/get/81ed9dd9-1be2-4f24-92f0-7ac6f096c698/id

  updateUser(id: number, formData:any): Observable<UserProfile>{
    return this.http.put<UserProfile>(`${this.userUrl}update/`+ id, formData);
  }

  getAllUser(){
    return this.http.get<any>(`${this.userUrl}index`);
  }
}
