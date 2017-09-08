import { Http, Headers, RequestOptions, Response } from "@angular/http";
import { Injectable, Component } from "@angular/core";
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
@Component({
    providers: [Http]
})
@Injectable()

export class HttpService<T> {

    constructor(private http: Http) { }

    get(url: string) {
        return this.http.get(url).map(res => res.json());
    }

    post(url: string, body: T) {
        let jsonBody = JSON.stringify(body);
        let headers = new Headers({ 'Content-Type': 'application/json; charset=utf-8' });
        let options = new RequestOptions({ headers: headers });

        return this.http.post(url, jsonBody, options).map(res => res.json());
    }



    put(url: string, body: T) {
        let jsonBody = JSON.stringify(body);
        let headers = new Headers({ 'Content-Type': 'application/json; charset=utf-8' });
        let options = new RequestOptions({ headers: headers });

        return this.http.put(url, jsonBody, options).map(res => res.json());
    }

    delete(url: string) {
        return this.http.delete(url).map(res => res.json());
    }
}