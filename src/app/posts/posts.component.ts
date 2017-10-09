import { Component, OnInit } from "@angular/core";
import { PostService } from "../services/post.service";
import { AppError } from "../common/app-error";
import { NotFoundError } from "../common/not-found-error";
import { BadInput } from "../common/bad-input";

@Component({
    selector: "app-posts",
    templateUrl: "./posts.component.html",
    styleUrls: [ "./posts.component.css" ]
})
export class PostsComponent implements OnInit {

    posts: any[];

    constructor(private service: PostService) {
    }

    ngOnInit() {
        this.service.getPosts()
            .subscribe(response => {
                this.posts = response.json();
            }, error => {
                alert("Error inesperado");
                console.log(error);
            });
    }

    createPost(input: HTMLInputElement) {
        let post: any = { title: input.value };
        input.value = "";
        this.service.createPost(post)
            .subscribe(response => {
                post.id = response.json().id;
                this.posts.splice(0, 0, post);

            }, (error: AppError) => {
                if (error instanceof BadInput) {
                    // this.form.setErrors(error.originalError);
                } else {
                    alert("Error inesperado");
                    console.log(error);
                }
            });
    }

    updatePost(post) {
        this.service.updatePost(post)
            .subscribe(response => {
                console.log(response.json());
            }, error => {
                alert("Error inesperado");
                console.log(error);
            });
    }

    deletePost(post) {
        this.service.deletePost(post.id)
            .subscribe(response => {
                let index = this.posts.indexOf(post);
                this.posts.splice(index, 1);
            }, (error: AppError) => {
                if (error instanceof NotFoundError) {
                    alert("El psot ya fue borrado");
                } else {
                    alert("Error inesperado");
                }
                console.log(error);
            });
    }

}
