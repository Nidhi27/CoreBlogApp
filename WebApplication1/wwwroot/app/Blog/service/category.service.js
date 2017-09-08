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
var CategoryService = (function () {
    function CategoryService(http, _http) {
        this.http = http;
        this._http = _http;
        this._addUrl = "http://localhost:59426/api/Category/PostCategories";
        this._updateUrl = "http://localhost:59426/api/Category/PutCategory";
        this._getUrl = "http://localhost:59426/api/Category/GetAllCategory";
        //public _getByIdUrl: string = "http://localhost:59426/api/Category/GetAllCategory";
        this._deleteUrl = "http://localhost:59426/api/Category/DeleteCategory";
    }
    CategoryService.prototype.getCategory = function () {
        return this._http.get(this._getUrl).map(function (response) { return response.json(); });
    };
    CategoryService.prototype.getCatById = function (id) {
        var getIdByUrl = this._getUrl + '/' + id;
        return this.http.get(getIdByUrl);
    };
    CategoryService.prototype.addCategory = function (cat) {
        return this.http.post(this._addUrl, cat);
    };
    CategoryService.prototype.updateCategory = function (cat, id) {
        return this.http.put(this._updateUrl + '/' + id, cat);
    };
    CategoryService.prototype.deleteCategory = function (id) {
        var deleteUrl = this._deleteUrl + '/' + id;
        return this.http.delete(deleteUrl);
    };
    return CategoryService;
}());
CategoryService = __decorate([
    core_1.Component({
        providers: [http_1.Http, http_service_1.HttpService]
    }),
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_service_1.HttpService, http_1.Http])
], CategoryService);
exports.CategoryService = CategoryService;
//# sourceMappingURL=category.service.js.map