import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate,
         CanActivateChild,
         Router, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild{
    constructor(private authService: AuthService,
                private router: Router){}

    canActivate(route: ActivatedRouteSnapshot,
                state: RouterStateSnapshot): Observable<Boolean|any> | Promise<boolean|any> | boolean{
        return this.authService.isAuthencated()
        .then(
            (authenticated:boolean|any)=>{
                if(authenticated){
                    return true;
                }
                else{
                    this.router.navigate(['/']);
                    return;
                }
            }
        );
    }
    canActivateChild(route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<Boolean|any> | Promise<boolean|any> | boolean{
            return this.canActivate(route,state);
    }
}