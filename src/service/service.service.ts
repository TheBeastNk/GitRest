import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';




@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  public username:string;


  constructor(private HttpClient :HttpClient) {
    this.username = 'thebeastnk';
  }
  // grtProfileInfo(){
  //   return this.HttpClient.get("https://api.github.com/users/" +this.username)
  //   .map(res => res.json());
  // }
}
