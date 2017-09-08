"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
//import { PostComponent } from './app.post';
var app_routing_1 = require("./app.routing");
var app_component_1 = require("./app.component");
var post_component_1 = require("../app/Blog/component/post.component");
var http_service_1 = require("../app/Blog/service/http.service");
var category_component_1 = require("../app/Blog/component/category.component");
var tag_component_1 = require("./Blog/component/tag.component");
var managePost_component_1 = require("./Blog/component/managePost.component");
var createPost_component_1 = require("./Blog/component/createPost.component");
var filter_pipe_1 = require("./Blog/component/filter.pipe");
var postById_component_1 = require("./Blog/component/postById.component");
var postByCategoryId_component_1 = require("./Blog/component/postByCategoryId.component");
var postByTagId_component_1 = require("./Blog/component/postByTagId.component");
var ng2_pagination_1 = require("ng2-pagination");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        declarations: [
            app_component_1.AppComponent,
            post_component_1.PostComponent,
            category_component_1.CategoryComponent,
            tag_component_1.TagComponent,
            managePost_component_1.PostManageComponent,
            createPost_component_1.CreatePostComponent,
            filter_pipe_1.SearchFilterPipe,
            postById_component_1.PostById,
            postByCategoryId_component_1.PostByCategoryId,
            postByTagId_component_1.PostByTagId
        ],
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            http_1.HttpModule,
            app_routing_1.routing,
            ng2_pagination_1.Ng2PaginationModule,
        ],
        providers: [http_service_1.HttpService],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map