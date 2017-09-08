import { Pipe, PipeTransform, Injectable } from '@angular/core';

@Pipe({ name: 'filter' })

@Injectable()
export class SearchFilterPipe implements PipeTransform {
    transform(posts: any, term: any): any {
        if (term === undefined) return posts;

        return posts.filter(
            function (post: any) {
                return post.title.toLowerCase().includes(term.toLowerCase());
            }

        );
    }
}