import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PostService } from '../service/post.service';
import { Post } from '../model/post';

@Component({
    selector: 'posts-details',
    templateUrl: './postById.component.html',
    styleUrls: ['./post.component.css'],
    providers: [PostService]
})

export class PostById implements OnInit {
    posts: Post[] = [];
    post: Post;
    id: number;
    private sub: any;

    public constructor(private route: Router, private router: ActivatedRoute, private postService: PostService) { }
    ngOnInit() {

        this.sub = this.router.params.subscribe(params => {
            this.id = +params['id'];
            this.postService.getPostById(this.id).subscribe((response) => {
                this.posts = response;
                console.log(this.posts);
            });

           

        });

    }
}