import { Component } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
    selector: 'post',
    templateUrl: './app.post.html',
})
export class PostComponent {

    public constructor(private route: Router, private router: ActivatedRoute) { }
   
}
