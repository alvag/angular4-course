import { Injectable } from "@angular/core";
import { Router, CanActivate, RouterStateSnapshot } from "@angular/router";
import { AuthService } from "./auth.service";

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(protected router: Router, protected authService: AuthService) { }

    canActivate(route, state: RouterStateSnapshot) {
        if (this.authService.isLoggedIn()) {
            return true;
        }

        console.log("state.url", state.url);
        this.router.navigate([ "/login" ], { queryParams: { returnUrl: state.url } });
        return false;
    }
}

