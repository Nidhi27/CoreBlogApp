"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var post_service_1 = require("../service/post.service");
var tag_1 = require("../model/tag");
var tag_service_1 = require("../service/tag.service");
var category_service_1 = require("../service/category.service");
var router_1 = require("@angular/router");
var PostManageComponent = (function () {
    function PostManageComponent(tagService, _router, postService, catService) {
        this.tagService = tagService;
        this._router = _router;
        this.postService = postService;
        this.catService = catService;
        this.tags = [];
        this.posts = [];
        this.cats = [];
        this.tagList = new Array();
        this.postList = new Array();
        this.catList = new Array();
        this.isEditMode = false;
        this.addTag = false;
        this.edit = false;
        this.newTag = new tag_1.Tags();
        this.log = '';
    }
    PostManageComponent.prototype.trackById = function (index, tag) {
        return tag.id;
    };
    PostManageComponent.prototype.logDropdown = function (id) {
        var NAME = this.catList.find(function (item) { return item.id == id; }).name;
        this.log += "Value " + NAME + " was selected\n";
    };
    PostManageComponent.prototype.ngOnInit = function () {
        this.getTag();
        this.getPost();
        this.getCat();
    };
    PostManageComponent.prototype.getPost = function () {
        var _this = this;
        this.postService.getPost().subscribe(function (Data) { return _this.postList = Data; });
    };
    PostManageComponent.prototype.getTag = function () {
        var _this = this;
        this.tagService.getTag().subscribe(function (Data) { return _this.tagList = Data; });
    };
    PostManageComponent.prototype.getCat = function () {
        var _this = this;
        this.catService.getCategory().subscribe(function (Data) { return _this.catList = Data; });
    };
    PostManageComponent.prototype.add = function () {
        this.addTag = true;
    };
    PostManageComponent.prototype.getPostById = function (post) {
        var _this = this;
        this.postService.getPostById(post.id).subscribe(function (response) {
            _this.post = response;
            console.log(_this.post);
            _this.edit = true;
        });
    };
    PostManageComponent.prototype.getTagById = function (tag) {
        var _this = this;
        this.tagService.getTagById(tag.id).subscribe(function (response) {
            _this.tag = response[0];
            console.log(_this.tag);
            _this.edit = true;
        });
    };
    PostManageComponent.prototype.addTags = function (tag) {
        var _this = this;
        this.tagService.addTag(tag).subscribe(function (response) {
            _this.tag = response;
            console.log(_this.tag);
            _this.addTag = false;
            _this.getTag();
        });
    };
    PostManageComponent.prototype.updatePost = function (post) {
        var _this = this;
        this.postService.updatePost(post, post.id).subscribe(function (response) {
            _this.post = response;
            console.log(_this.post);
            _this.edit = false;
            _this.getPost();
        });
    };
    PostManageComponent.prototype.deletePost = function (post) {
        var _this = this;
        this.postService.deletePost(post.id).subscribe(function (response) {
            _this.post = response;
            console.log(_this.post);
            _this.getPost();
        });
    };
    PostManageComponent.prototype.updateTag = function (tag) {
        var _this = this;
        this.tagService.updateTag(tag, tag.id).subscribe(function (response) {
            _this.tag = response;
            console.log(_this.tag);
            _this.edit = false;
            _this.getTag();
        });
    };
    PostManageComponent.prototype.deleteTag = function (tag) {
        var _this = this;
        this.tagService.deleteTag(tag.id).subscribe(function (response) {
            _this.tag = response;
            console.log(_this.tag);
            _this.getTag();
        });
    };
    return PostManageComponent;
}());
PostManageComponent = __decorate([
    core_1.Component({
        selector: 'post-manage',
        templateUrl: './managePost.component.html',
        providers: [tag_service_1.TagService, post_service_1.PostService, category_service_1.CategoryService]
    }),
    __metadata("design:paramtypes", [tag_service_1.TagService, router_1.Router, post_service_1.PostService, category_service_1.CategoryService])
], PostManageComponent);
exports.PostManageComponent = PostManageComponent;
//# sourceMappingURL=managePost.component.js.map