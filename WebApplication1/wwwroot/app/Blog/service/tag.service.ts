import { Injectable, Component } from '@angular/core';
import { Http, Response, Request, RequestOptions, RequestMethod, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Tags } from '../model/tag';
import { HttpService } from './http.service';


@Component({
    providers: [Http, HttpService]
})

@Injectable()

export class TagService {
    constructor(private http: HttpService<Tags>, private _http: Http) { }

    public _addUrl: string = "http://localhost:59426/api/Tag/PostTags";
    public _updateUrl: string = "http://localhost:59426/api/Tag/PutTag";
    public _getUrl: string = "http://localhost:59426/api/Tag/GetAllTag";
    //public _getByIdUrl: string = "http://localhost:59426/api/Tag/GetAllTag";
    public _deleteUrl: string = "http://localhost:59426/api/Tag/DeleteTag";

    getTag() {
        return this._http.get(this._getUrl).map((response: Response) => response.json());

    }

    getTagById(id: number): Observable<Tags> {
        var getIdByUrl = this._getUrl + '/' + id;
        return this.http.get(getIdByUrl);

    }
    addTag(tag: Tags): Observable<Tags> {
        return this.http.post(this._addUrl, tag);
    }

    updateTag(tag: Tags, id: number): Observable<Tags> {
        return this.http.put(this._updateUrl + '/' + id, tag);
    }

    deleteTag(id: number): Observable<Tags> {
        var deleteUrl = this._deleteUrl + '/' + id;
        return this.http.delete(deleteUrl);
    }

}