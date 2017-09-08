import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
//import { PostComponent } from './app.post';
import { routing } from './app.routing';
import { AppComponent } from './app.component';
import { PostComponent } from '../app/Blog/component/post.component';
import { HttpService } from '../app/Blog/service/http.service';
import { CategoryComponent } from '../app/Blog/component/category.component';
import { TagComponent } from './Blog/component/tag.component';
import { PostManageComponent } from './Blog/component/managePost.component';
import { CreatePostComponent } from './Blog/component/createPost.component';
import { SearchFilterPipe } from './Blog/component/filter.pipe';
import { PostById } from './Blog/component/postById.component';
import { PostByCategoryId } from './Blog/component/postByCategoryId.component';
import { PostByTagId } from './Blog/component/postByTagId.component';
import { Ng2PaginationModule } from 'ng2-pagination';


@NgModule({
    declarations: [
        AppComponent,
        PostComponent,
        CategoryComponent,
        TagComponent,
        PostManageComponent,
        CreatePostComponent,
        SearchFilterPipe,
        PostById,
        PostByCategoryId,
        PostByTagId
        //PostComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        routing,
        Ng2PaginationModule,
    ],
    providers: [HttpService],
    bootstrap: [AppComponent]
})
export class AppModule { }