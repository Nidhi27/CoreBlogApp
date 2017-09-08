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
var tag_service_1 = require("../service/tag.service");
var post_1 = require("../model/post");
var post_service_1 = require("../service/post.service");
var category_service_1 = require("../service/category.service");
var router_1 = require("@angular/router");
var CreatePostComponent = (function () {
    function CreatePostComponent(tagService, _router, postService, catService) {
        this.tagService = tagService;
        this._router = _router;
        this.postService = postService;
        this.catService = catService;
        this.tags = [];
        this.posts = [];
        this.cat = [];
        this.catList = new Array();
        this.tagList = new Array();
        this.isEditMode = false;
        this.addPost = false;
        this.newPost = new post_1.Post();
    }
    CreatePostComponent.prototype.ngOnInit = function () {
        this.getTag();
        this.getCat();
    };
    CreatePostComponent.prototype.getTag = function () {
        var _this = this;
        this.tagService.getTag().subscribe(function (Data) { return _this.tagList = Data; });
    };
    CreatePostComponent.prototype.getCat = function () {
        var _this = this;
        this.catService.getCategory().subscribe(function (Data) { return _this.catList = Data; });
    };
    CreatePostComponent.prototype.addPosts = function (post) {
        var _this = this;
        this.postService.addPost(post).subscribe(function (response) {
            _this.post = response;
            console.log(_this.post);
            _this._router.navigate(['/Home/Post']);
        });
    };
    return CreatePostComponent;
}());
CreatePostComponent = __decorate([
    core_1.Component({
        selector: 'create-post',
        templateUrl: './createPost.component.html',
        providers: [tag_service_1.TagService, post_service_1.PostService, category_service_1.CategoryService]
    }),
    __metadata("design:paramtypes", [tag_service_1.TagService, router_1.Router, post_service_1.PostService, category_service_1.CategoryService])
], CreatePostComponent);
exports.CreatePostComponent = CreatePostComponent;
//# sourceMappingURL=createPost.component.js.map