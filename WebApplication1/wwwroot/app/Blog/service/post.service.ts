import { Injectable, Component } from '@angular/core';
import { Http, Response, Request, RequestOptions, RequestMethod, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Post } from '../model/post';
import { HttpService } from './http.service';


@Component({
    providers: [Http, HttpService]
})

@Injectable()

export class PostService {
    constructor(private http: HttpService<Post>, private _http: Http) { }

    public _addUrl: string = "http://localhost:59426/api/Post/PostPosts";
    public _updateUrl: string = "http://localhost:59426/api/Post/PutPost";
    public _getUrl: string = "http://localhost:59426/api/Post/GetAllPost";
    public _getById: string = "http://localhost:59426/api/Post/GetAllById";
    public _getCategoryUrl: string = "http://localhost:59426/api/Post/GetAllPostByCategoryId";
    public _getTagUrl: string = "http://localhost:59426/api/Post/GetAllPostByTagId";
    //public _getByIdUrl: string = "http://localhost:59426/api/Post/GetAllPost";
    public _deleteUrl: string = "http://localhost:59426/api/Post/DeletePost";

    getPost() {
        return this._http.get(this._getUrl).map((response: Response) => response.json());

    }

    getPostByCategoryId(categoryId: any) {
        var getIdByUrl = this._getCategoryUrl + '/' + categoryId;
        return this._http.get(getIdByUrl).map((response: Response) => response.json());
    }

    getPostByTagId(tagId: any) {
        var getIdByUrl = this._getTagUrl + '/' + tagId;
        return this._http.get(getIdByUrl).map((response: Response) => response.json());
    }

    getPostById(id: any) {
        var getIdByUrl = this._getById + '/' + id;
        return this._http.get(getIdByUrl).map((response: Response) => response.json());

    }
    addPost(post: Post): Observable<Post> {
        return this.http.post(this._addUrl, post);
    }

    updatePost(post: Post, id: number): Observable<Post> {
        return this.http.put(this._updateUrl + '/' + id, post);
    }

    deletePost(id: number): Observable<Post> {
        var deleteUrl = this._deleteUrl + '/' + id;
        return this.http.delete(deleteUrl);
    }

}