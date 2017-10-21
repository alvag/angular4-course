import { ErrorHandler, NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";
import { FavoriteComponent } from "./favorite/favorite.component";
import { ContactFormComponent } from "./contact-form/contact-form.component";
import { SignupFormComponent } from "./signup-form/signup-form.component";
import { PostsComponent } from "./posts/posts.component";
import { BaseRequestOptions, Http, HttpModule } from "@angular/http";
import { PostService } from "./services/post.service";
import { AppErrorHandler } from "./common/app-error-handler";
import { GithubFollowersComponent } from "./github-followers/github-followers.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { HomeComponent } from "./home/home.component";
import { GithubProfileComponent } from "./github-profile/github-profile.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import { GithubFollowersService } from "./services/github-followers.service";
import { LoginComponent } from "./login/login.component";
import { AuthService } from "./services/auth.service";
import { HomeLoginComponent } from "./home-login/home-login.component";
import { AdminComponent } from "./admin/admin.component";
import { OrderService } from "./services/order.service";
import { fakeBackendProvider } from "./helpers/fake-backend";
import { MockBackend } from "@angular/http/testing";
import { AuthGuard } from "./services/auth-guard.service";
import { AuthHttp, AUTH_PROVIDERS, provideAuth, AuthConfig } from "angular2-jwt";
import { NoAccessComponent } from "./no-access/no-access.component";
import { AdminAuthGuard } from "./services/admin-auth-guard.service";

export function getAuthHttp(http) {
    return new AuthHttp(new AuthConfig({
        tokenName: "token"
    }), http);
}

@NgModule({
    declarations: [
        AppComponent,
        FavoriteComponent,
        ContactFormComponent,
        SignupFormComponent,
        PostsComponent,
        GithubFollowersComponent,
        NavbarComponent,
        HomeComponent,
        GithubProfileComponent,
        NotFoundComponent,
        LoginComponent,
        HomeLoginComponent,
        AdminComponent,
        NoAccessComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        RouterModule.forRoot([
            { path: "", component: HomeLoginComponent },
            { path: "followers/:id/:username", component: GithubProfileComponent },
            { path: "followers", component: GithubFollowersComponent },
            { path: "posts", component: PostsComponent },
            { path: "login", component: LoginComponent },
            { path: "admin", component: AdminComponent, canActivate: [ AuthGuard, AdminAuthGuard ] },
            { path: "no-access", component: NoAccessComponent },
            { path: "**", component: NotFoundComponent }
        ])
    ],
    providers: [
        PostService,
        GithubFollowersService,
        AuthService,
        OrderService,

        AuthGuard,
        AdminAuthGuard,

        AuthHttp,
        {
            provide: AuthHttp,
            useFactory: getAuthHttp,
            deps: [Http]
        },

        { provide: ErrorHandler, useClass: AppErrorHandler },
        // For creating a mock back-end. You don't need these in a real app.
        fakeBackendProvider,
        MockBackend,
        BaseRequestOptions
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule {
}
