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
var PostById = (function () {
    function PostById(route, router, postService) {
        this.route = route;
        this.router = router;
        this.postService = postService;
        this.posts = [];
    }
    PostById.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.router.params.subscribe(function (params) {
            _this.id = +params['id'];
            _this.postService.getPostById(_this.id).subscribe(function (response) {
                _this.posts = response;
                console.log(_this.posts);
            });
        });
    };
    return PostById;
}());
PostById = __decorate([
    core_1.Component({
        selector: 'posts-details',
        templateUrl: './postById.component.html',
        styleUrls: ['./post.component.css'],
        providers: [post_service_1.PostService]
    }),
    __metadata("design:paramtypes", [router_1.Router, router_1.ActivatedRoute, post_service_1.PostService])
], PostById);
exports.PostById = PostById;
//# sourceMappingURL=postById.component.js.map