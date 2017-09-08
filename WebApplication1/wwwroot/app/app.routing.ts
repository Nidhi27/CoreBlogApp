
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostComponent } from '../app/Blog/component/post.component';
import { AppComponent } from './app.component';
import { CategoryComponent } from './Blog/component/category.component';
import { TagComponent } from './Blog/component/tag.component';
import { PostManageComponent } from './Blog/component/managePost.component';
import { CreatePostComponent } from './Blog/component/createPost.component';
import { PostById } from './Blog/component/postById.component';
import { PostByCategoryId } from './Blog/component/postByCategoryId.component';
import { PostByTagId } from './Blog/component/postByTagId.component';


const appRoutes: Routes = [
    //{ path: '', component: HomeComponent, pathMatch: 'full' },
    { path: '', component: PostComponent },
    { path: 'Home/Post', component: PostComponent },
    { path: 'Home/Admin', component: CategoryComponent },
    { path: 'Home/Admin/tag', component: TagComponent },
    { path: 'Home/Admin/managePost', component: PostManageComponent },
    { path: 'Home/CreatePost', component: CreatePostComponent },
    { path: 'post-details/:id', component: PostById },
    { path: 'category/:categoryId', component: PostByCategoryId },
    { path: 'tag/:tagId', component: PostByTagId }
    //{ path: 'addpost', component: AddPostComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);