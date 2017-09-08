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
var tag_1 = require("../model/tag");
var tag_service_1 = require("../service/tag.service");
var router_1 = require("@angular/router");
var TagComponent = (function () {
    function TagComponent(tagService, _router) {
        this.tagService = tagService;
        this._router = _router;
        this.tags = [];
        this.tagList = new Array();
        this.isEditMode = false;
        this.addTag = false;
        this.edit = false;
        this.newTag = new tag_1.Tags();
    }
    TagComponent.prototype.ngOnInit = function () {
        this.getTag();
    };
    TagComponent.prototype.getTag = function () {
        var _this = this;
        this.tagService.getTag().subscribe(function (Data) { return _this.tagList = Data; });
    };
    TagComponent.prototype.add = function () {
        this.addTag = true;
    };
    TagComponent.prototype.getTagById = function (tag) {
        var _this = this;
        this.tagService.getTagById(tag.id).subscribe(function (response) {
            _this.tag = response[0];
            console.log(_this.tag);
            _this.edit = true;
        });
    };
    TagComponent.prototype.addTags = function (tag) {
        var _this = this;
        this.tagService.addTag(tag).subscribe(function (response) {
            _this.tag = response;
            console.log(_this.tag);
            _this.addTag = false;
            _this.newTag = new tag_1.Tags();
            _this.getTag();
        });
    };
    TagComponent.prototype.updateTag = function (tag) {
        var _this = this;
        this.tagService.updateTag(tag, tag.id).subscribe(function (response) {
            _this.tag = response;
            console.log(_this.tag);
            _this.edit = false;
            _this.getTag();
        });
    };
    TagComponent.prototype.deleteTag = function (tag) {
        var _this = this;
        this.tagService.deleteTag(tag.id).subscribe(function (response) {
            _this.tag = response;
            console.log(_this.tag);
            _this.getTag();
        });
    };
    return TagComponent;
}());
TagComponent = __decorate([
    core_1.Component({
        selector: 'tag',
        templateUrl: './tag.component.html',
        providers: [tag_service_1.TagService]
    }),
    __metadata("design:paramtypes", [tag_service_1.TagService, router_1.Router])
], TagComponent);
exports.TagComponent = TagComponent;
//# sourceMappingURL=tag.component.js.map