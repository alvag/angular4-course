import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { FavoriteComponent } from "./favorite/favorite.component";
import { ContactFormComponent } from "./contact-form/contact-form.component";
import { SignupFormComponent } from "./signup-form/signup-form.component";
import { PostsComponent } from "./posts/posts.component";
import { HttpModule } from "@angular/http";
import { PostService } from "./services/post.service";

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
    providers: [PostService],
    bootstrap: [ AppComponent ]
})
export class AppModule {
}
