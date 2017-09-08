"use strict";
var router_1 = require("@angular/router");
var app_post_1 = require("./app.post");
var appRoutes = [
    //{ path: '', component: HomeComponent, pathMatch: 'full' },
    { path: 'post', component: app_post_1.PostComponent },
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map