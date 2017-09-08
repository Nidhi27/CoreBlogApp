import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PostService } from '../service/post.service';
import { Post } from '../model/post';
import { CategoryService } from '../service/category.service';
import { Category } from '../model/category';
import { TagService } from '../service/tag.service';
import { Tags } from '../model/tag';

@Component({
    selector: 'posts-category',
    templateUrl: './post.component.html',
    styleUrls: ['./post.component.css'],
    providers: [PostService, CategoryService, TagService]
})

export class PostByCategoryId implements OnInit {
    post: Array<Post> = new Array<Post>();
    posts: Post[] = [];
    cats: Category[] = [];
    tags: Tags[] = [];
    categoryId: number;
    private sub: any;
    date = new Date();
    p: number = 1;
    public constructor(private route: Router, private router: ActivatedRoute,
        private postService: PostService, private catService: CategoryService, private tagService: TagService) { }

    ngOnInit() {
        this.getCats();
        this.getTags();
        this.sub = this.router.params.subscribe(params => {
            this.categoryId = +params['categoryId'];
            this.postService.getPostByCategoryId(this.categoryId).subscribe((response) => {
                console.log(response);
                this.posts = response;
            });
        });

    }

    private getCats() {
        this.catService.getCategory().subscribe(data => this.cats = data);
    }

    private getTags() {
        this.tagService.getTag().subscribe(data => this.tags = data);
    }
}