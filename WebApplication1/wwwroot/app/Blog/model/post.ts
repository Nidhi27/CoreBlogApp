import {PostTag } from './postTag';

export class Post {
    id: number;
    title: string;
    content: string;
    postedOn: Date = new Date();
    category_Id: number;
    categoryName: string;
    tags: any;
    tagIds: number;
    tagName: string;
    userId: number;
    userName: string;
}