import { Component, OnInit } from '@angular/core';
import { Pipe, PipeTransform } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';
import { Router, ActivatedRoute } from '@angular/router';
import { PostService } from '../service/post.service';
import { Post } from '../model/post';
import { CategoryService } from '../service/category.service';
import { Category } from '../model/category';
import { TagService } from '../service/tag.service';
import { Tags } from '../model/tag';
import { SearchFilterPipe } from './filter.pipe';
import { Ng2PaginationModule } from 'ng2-pagination';



@Component({
    selector: 'posts',
    templateUrl: './post.component.html',
    styleUrls: ['./post.component.css'],
    providers: [PostService, CategoryService, TagService]
})
export class PostComponent implements OnInit {
    posts: Post[] = [];
    cats: Category[] = [];
    tags: Tags[] = [];
    date = new Date();
     p: number = 1;
    public constructor(private route: Router, private router: ActivatedRoute, private postService: PostService, private catService: CategoryService, private tagService: TagService) { }
    ngOnInit() {

        this.getPosts();
        this.getCats();
        this.getTags();
       
    }

    private getPosts() {

        this.postService.getPost()
            .subscribe(data => this.posts = data);      
    }

    private getCats() {
        this.catService.getCategory().subscribe(data => this.cats = data);
    }

    private getTags() {
        this.tagService.getTag().subscribe(data => this.tags = data);
    }

}
