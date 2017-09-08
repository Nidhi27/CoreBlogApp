import { Component, OnInit } from '@angular/core';
import { Tags } from '../model/tag';
import { TagService } from '../service/tag.service';
import { Post } from '../model/post';
import { PostService } from '../service/post.service';
import { Category } from '../model/category';
import { CategoryService } from '../service/category.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
    selector: 'create-post',
    templateUrl: './createPost.component.html',
    providers: [TagService, PostService, CategoryService]
})

export class CreatePostComponent implements OnInit {
    tag: Tags;
    tags: Tags[] = [];
    
    post: Post;
    posts: Post[] = [];
    cats: Category;
    cat: Category[] = [];
    catList: Array<Category> = new Array<Category>();
    tagList: Array<Tags> = new Array<Tags>();
    formLabel: string;
    isEditMode: boolean = false;
    addPost: boolean = false;

    Form: FormGroup;

    newPost: Post = new Post();

    constructor(private tagService: TagService, private _router: Router, private postService: PostService, private catService: CategoryService) {

    }

    ngOnInit() {

        this.getTag();
        this.getCat();
    }

    private getTag() {
        this.tagService.getTag().subscribe(Data => this.tagList = Data);
    }

    private getCat() {
        this.catService.getCategory().subscribe(Data => this.catList = Data);
    }

  

    addPosts(post: Post) {
        
        this.postService.addPost(post).subscribe((response) => {
           
            this.post = response;
            console.log(this.post);
            this._router.navigate(['/Home/Post']);
        });
    }

   

    }
