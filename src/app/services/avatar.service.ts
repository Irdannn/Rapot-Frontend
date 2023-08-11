import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AvatarService {

  private baseUrl = "http://localhost:8000/api/foto/";

  constructor(
    private http: HttpClient
  ) { }

  addAvatar(formData:any){
    return this.http.post<any>(`${this.baseUrl}create`, formData);
  }
  getAvatar(id:any){
    return this.http.get<any>(`${this.baseUrl}get/` + id)
  }
  // http://localhost:8000/api/foto/get/7dee17d3-46f6-4784-8bce-69e5f36aec51

  // getUserProfile(id:string) {
  //   return this.http.get<any>(`${this.userUrl}showuser/` + id);
  // }
  // http://localhost:8000/api/foto/get/7dee17d3-46f6-4784-8bce-69e5f36aec51/id

  getAllAvatar(){
    return this.http.get<any>(`${this.baseUrl}get`);
  }
}
