"use strict";
var router_1 = require("@angular/router");
var post_component_1 = require("../app/Blog/component/post.component");
var category_component_1 = require("./Blog/component/category.component");
var tag_component_1 = require("./Blog/component/tag.component");
var managePost_component_1 = require("./Blog/component/managePost.component");
var createPost_component_1 = require("./Blog/component/createPost.component");
var postById_component_1 = require("./Blog/component/postById.component");
var postByCategoryId_component_1 = require("./Blog/component/postByCategoryId.component");
var postByTagId_component_1 = require("./Blog/component/postByTagId.component");
var appRoutes = [
    //{ path: '', component: HomeComponent, pathMatch: 'full' },
    { path: '', component: post_component_1.PostComponent },
    { path: 'Home/Post', component: post_component_1.PostComponent },
    { path: 'Home/Admin', component: category_component_1.CategoryComponent },
    { path: 'Home/Admin/tag', component: tag_component_1.TagComponent },
    { path: 'Home/Admin/managePost', component: managePost_component_1.PostManageComponent },
    { path: 'Home/CreatePost', component: createPost_component_1.CreatePostComponent },
    { path: 'post-details/:id', component: postById_component_1.PostById },
    { path: 'category/:categoryId', component: postByCategoryId_component_1.PostByCategoryId },
    { path: 'tag/:tagId', component: postByTagId_component_1.PostByTagId }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map