import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";

@Injectable({
  providedIn: 'root',
})
export class AuthGuardService implements CanActivate{

  constructor(private Router: Router){}
  async canActivate(): Promise<boolean> {
    const token = localStorage.getItem("token");

    if(token){
     this.Router.navigate(["/onboarding"]);
    }
    return true;
  }
}
