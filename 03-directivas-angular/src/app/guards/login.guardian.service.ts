import { ActivatedRouteSnapshot, CanActivate, GuardResult, MaybeAsync, Router, RouterStateSnapshot } from "@angular/router";
import { LoginService } from "../services/login.service";
import { Injectable } from "@angular/core";


@Injectable()
export class LoginGuardian implements CanActivate{



    constructor(private loginService:LoginService,private router:Router){}
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): MaybeAsync<GuardResult> {
            if(this.loginService.isAuthenticado()){
                return true;
            }else{
                this.router.navigate(["login"]);
                return false;
            }


    }

}