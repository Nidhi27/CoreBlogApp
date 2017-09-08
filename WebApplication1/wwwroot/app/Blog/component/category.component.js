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
var category_1 = require("../model/category");
var category_service_1 = require("../service/category.service");
var router_1 = require("@angular/router");
var CategoryComponent = (function () {
    function CategoryComponent(catService, _router) {
        this.catService = catService;
        this._router = _router;
        this.cats = [];
        this.catList = new Array();
        this.isEditMode = false;
        this.addCat = false;
        this.edit = false;
        this.newCat = new category_1.Category();
    }
    CategoryComponent.prototype.ngOnInit = function () {
        this.getCategory();
    };
    CategoryComponent.prototype.getCategory = function () {
        var _this = this;
        this.catService.getCategory().subscribe(function (Data) { return _this.catList = Data; });
    };
    CategoryComponent.prototype.add = function () {
        this.addCat = true;
    };
    CategoryComponent.prototype.getCatById = function (cat) {
        var _this = this;
        this.catService.getCatById(cat.id).subscribe(function (response) {
            _this.category = response[0];
            console.log(_this.category);
            _this.edit = true;
        });
    };
    CategoryComponent.prototype.addCategory = function (cat) {
        var _this = this;
        this.catService.addCategory(cat).subscribe(function (response) {
            _this.category = response;
            console.log(_this.category);
            _this.addCat = false;
            _this.newCat = new category_1.Category();
            _this.getCategory();
        });
    };
    CategoryComponent.prototype.updateCategory = function (cat) {
        var _this = this;
        this.catService.updateCategory(cat, cat.id).subscribe(function (response) {
            _this.category = response;
            console.log(_this.category);
            _this.edit = false;
            _this.getCategory();
        });
    };
    CategoryComponent.prototype.deleteCategory = function (cat) {
        var _this = this;
        this.catService.deleteCategory(cat.id).subscribe(function (response) {
            _this.category = response;
            console.log(_this.category);
            _this.getCategory();
        });
    };
    return CategoryComponent;
}());
CategoryComponent = __decorate([
    core_1.Component({
        selector: 'cat',
        templateUrl: './category.component.html',
        providers: [category_service_1.CategoryService]
    }),
    __metadata("design:paramtypes", [category_service_1.CategoryService, router_1.Router])
], CategoryComponent);
exports.CategoryComponent = CategoryComponent;
//# sourceMappingURL=category.component.js.map