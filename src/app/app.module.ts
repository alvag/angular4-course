import { ErrorHandler, NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { FavoriteComponent } from "./favorite/favorite.component";
import { ContactFormComponent } from "./contact-form/contact-form.component";
import { SignupFormComponent } from "./signup-form/signup-form.component";
import { PostsComponent } from "./posts/posts.component";
import { HttpModule } from "@angular/http";
import { PostService } from "./services/post.service";
import { AppErrorHandler } from "./common/app-error-handler";

@NgModule({
    declarations: [
        AppComponent,
        FavoriteComponent,
        ContactFormComponent,
        SignupFormComponent,
        PostsComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule
    ],
    providers: [
        PostService,
        { provide: ErrorHandler, useClass: AppErrorHandler }
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule {
}
