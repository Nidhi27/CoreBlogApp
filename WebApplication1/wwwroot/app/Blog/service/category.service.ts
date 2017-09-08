import { Injectable, Component } from '@angular/core';
import { Http, Response, Request, RequestOptions, RequestMethod, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Category } from '../model/category';
import { HttpService } from './http.service';


@Component({
    providers: [Http, HttpService]
})

@Injectable()

export class CategoryService {
    constructor(private http: HttpService<Category>, private _http: Http) { }

    public _addUrl: string = "http://localhost:59426/api/Category/PostCategories";
    public _updateUrl: string = "http://localhost:59426/api/Category/PutCategory";
    public _getUrl: string = "http://localhost:59426/api/Category/GetAllCategory";
    //public _getByIdUrl: string = "http://localhost:59426/api/Category/GetAllCategory";
    public _deleteUrl: string = "http://localhost:59426/api/Category/DeleteCategory";

    getCategory() {
        return this._http.get(this._getUrl).map((response: Response) => response.json());

    }

    getCatById(id: number): Observable<Category> {
        var getIdByUrl = this._getUrl + '/' + id;
        return this.http.get(getIdByUrl);

    }
    addCategory(cat: Category): Observable<Category> {
        return this.http.post(this._addUrl, cat);
    }

    updateCategory(cat: Category, id: number): Observable<Category> {
        return this.http.put(this._updateUrl + '/' + id, cat);
    }

    deleteCategory(id: number): Observable<Category> {
        var deleteUrl = this._deleteUrl + '/' + id;
        return this.http.delete(deleteUrl);
    }

}