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
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
var http_service_1 = require("./http.service");
var PostService = (function () {
    function PostService(http, _http) {
        this.http = http;
        this._http = _http;
        this._addUrl = "http://localhost:59426/api/Post/PostPosts";
        this._updateUrl = "http://localhost:59426/api/Post/PutPost";
        this._getUrl = "http://localhost:59426/api/Post/GetAllPost";
        this._getById = "http://localhost:59426/api/Post/GetAllById";
        this._getCategoryUrl = "http://localhost:59426/api/Post/GetAllPostByCategoryId";
        this._getTagUrl = "http://localhost:59426/api/Post/GetAllPostByTagId";
        //public _getByIdUrl: string = "http://localhost:59426/api/Post/GetAllPost";
        this._deleteUrl = "http://localhost:59426/api/Post/DeletePost";
    }
    PostService.prototype.getPost = function () {
        return this._http.get(this._getUrl).map(function (response) { return response.json(); });
    };
    PostService.prototype.getPostByCategoryId = function (categoryId) {
        var getIdByUrl = this._getCategoryUrl + '/' + categoryId;
        return this._http.get(getIdByUrl).map(function (response) { return response.json(); });
    };
    PostService.prototype.getPostByTagId = function (tagId) {
        var getIdByUrl = this._getTagUrl + '/' + tagId;
        return this._http.get(getIdByUrl).map(function (response) { return response.json(); });
    };
    PostService.prototype.getPostById = function (id) {
        var getIdByUrl = this._getById + '/' + id;
        return this._http.get(getIdByUrl).map(function (response) { return response.json(); });
    };
    PostService.prototype.addPost = function (post) {
        return this.http.post(this._addUrl, post);
    };
    PostService.prototype.updatePost = function (post, id) {
        return this.http.put(this._updateUrl + '/' + id, post);
    };
    PostService.prototype.deletePost = function (id) {
        var deleteUrl = this._deleteUrl + '/' + id;
        return this.http.delete(deleteUrl);
    };
    return PostService;
}());
PostService = __decorate([
    core_1.Component({
        providers: [http_1.Http, http_service_1.HttpService]
    }),
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_service_1.HttpService, http_1.Http])
], PostService);
exports.PostService = PostService;
//# sourceMappingURL=post.service.js.map