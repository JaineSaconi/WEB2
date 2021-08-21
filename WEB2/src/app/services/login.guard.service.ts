import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";

@Injectable({
  providedIn: 'root',
})
export class LoginGuardService implements CanActivate{

  constructor(private Router: Router){}
  async canActivate(): Promise<boolean> {
    const token = localStorage.getItem("token");

    if(token){
      return true;
    } else{
      this.Router.navigate([""]);
      return false;
    }
  }
}
