import { Component, OnInit } from '@angular/core';
import { Post } from '../model/post';
import { PostService } from '../service/post.service';
import { Tags } from '../model/tag';
import { TagService } from '../service/tag.service';
import { Category } from '../model/category';
import { CategoryService } from '../service/category.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
    selector: 'post-manage',
    templateUrl: './managePost.component.html',
    providers: [TagService, PostService, CategoryService]
})

export class PostManageComponent implements OnInit {
    tag: Tags;
    tags: Tags[] = [];
    post: Post;
    posts: Post[] = [];
    cat: Category;
    cats: Category[] = [];
    tagList: Array<Tags> = new Array<Tags>();
    postList: Array<Post> = new Array<Post>();
    catList: Array<Category> = new Array<Category>();
    formLabel: string;
    isEditMode: boolean = false;
    addTag: boolean = false;
    Form: FormGroup;
    edit: boolean = false;
    newTag: Tags = new Tags();
    private log: string = '';
    trackById(index: number, tag: any): number {
        return tag.id;
    }

    private logDropdown(id: number): void {
        const NAME = this.catList.find((item: any) => item.id == id).name;
        this.log += `Value ${NAME} was selected\n`
    }

    constructor(private tagService: TagService, private _router: Router, private postService: PostService, private catService: CategoryService) {

    }

    ngOnInit() {

        this.getTag();
        this.getPost();
        this.getCat();
    }

    private getPost() {
        this.postService.getPost().subscribe(Data => this.postList = Data);
    }

    private getTag() {
        this.tagService.getTag().subscribe(Data => this.tagList = Data);
    }

    private getCat() {
        this.catService.getCategory().subscribe(Data => this.catList = Data);
    }

    add() {
        this.addTag = true;
    }

    getPostById(post: Post) {
        this.postService.getPostById(post.id).subscribe((response) => {
            this.post = response;
            console.log(this.post);
            this.edit = true;
        })
    }

    getTagById(tag: Tags) {
        this.tagService.getTagById(tag.id).subscribe((response) => {
            this.tag = response[0];
            console.log(this.tag);
            this.edit = true;
        });
    }

    addTags(tag: Tags) {

        this.tagService.addTag(tag).subscribe((response) => {
            this.tag = response;
            console.log(this.tag);
            this.addTag = false;
            this.getTag();
        });
    }

    updatePost(post: Post) {
        this.postService.updatePost(post, post.id).subscribe((response) => {
            this.post = response;
            console.log(this.post);
            this.edit = false;
            this.getPost();
        });
    }

    deletePost(post: Post) {
        this.postService.deletePost(post.id).subscribe((response) => {
            this.post = response;
            console.log(this.post);
            this.getPost();
        })
    }

    updateTag(tag: Tags) {
        this.tagService.updateTag(tag, tag.id).subscribe((response) => {
            this.tag = response;
            console.log(this.tag);
            this.edit = false;
            this.getTag();
        });
    }

    deleteTag(tag: Tags) {
        this.tagService.deleteTag(tag.id).subscribe((response) => {
            this.tag = response;
            console.log(this.tag);
            this.getTag();
        });

    }
}