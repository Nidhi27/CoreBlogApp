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
var router_1 = require("@angular/router");
var post_service_1 = require("../service/post.service");
var category_service_1 = require("../service/category.service");
var tag_service_1 = require("../service/tag.service");
var PostByTagId = (function () {
    function PostByTagId(route, router, postService, catService, tagService) {
        this.route = route;
        this.router = router;
        this.postService = postService;
        this.catService = catService;
        this.tagService = tagService;
        this.post = new Array();
        this.posts = [];
        this.cats = [];
        this.tags = [];
        this.date = new Date();
        this.p = 1;
    }
    PostByTagId.prototype.ngOnInit = function () {
        var _this = this;
        this.getCats();
        this.getTags();
        this.sub = this.router.params.subscribe(function (params) {
            _this.tagId = +params['tagId'];
            _this.postService.getPostByTagId(_this.tagId).subscribe(function (response) {
                console.log(response);
                _this.posts = response;
            });
        });
    };
    PostByTagId.prototype.getCats = function () {
        var _this = this;
        this.catService.getCategory().subscribe(function (data) { return _this.cats = data; });
    };
    PostByTagId.prototype.getTags = function () {
        var _this = this;
        this.tagService.getTag().subscribe(function (data) { return _this.tags = data; });
    };
    return PostByTagId;
}());
PostByTagId = __decorate([
    core_1.Component({
        selector: 'posts-category',
        templateUrl: './post.component.html',
        styleUrls: ['./post.component.css'],
        providers: [post_service_1.PostService, category_service_1.CategoryService, tag_service_1.TagService]
    }),
    __metadata("design:paramtypes", [router_1.Router, router_1.ActivatedRoute,
        post_service_1.PostService, category_service_1.CategoryService, tag_service_1.TagService])
], PostByTagId);
exports.PostByTagId = PostByTagId;
//# sourceMappingURL=postByTagId.component.js.map