import { Component } from "@angular/core";
import { AuthService } from "../services/auth.service";

@Component({
    selector: "home",
    templateUrl: "./home-login.component.html",
    styleUrls: [ "./home-login.component.css" ]
})
export class HomeLoginComponent {

    constructor(private authService: AuthService) { }
}
