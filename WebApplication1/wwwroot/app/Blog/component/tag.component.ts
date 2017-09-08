import { Component, OnInit } from '@angular/core';
import { Tags } from '../model/tag';
import { TagService } from '../service/tag.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
    selector: 'tag',
    templateUrl: './tag.component.html',
    providers: [TagService]
})

export class TagComponent implements OnInit {
    tag: Tags;
    tags: Tags[] = [];
    tagList: Array<Tags> = new Array<Tags>();
    formLabel: string;
    isEditMode: boolean = false;
    addTag: boolean = false;
    Form: FormGroup;
    edit: boolean = false;
    newTag: Tags = new Tags();

    constructor(private tagService: TagService, private _router: Router) {

    }

    ngOnInit() {

        this.getTag();
    }

    private getTag() {
        this.tagService.getTag().subscribe(Data => this.tagList = Data);
    }

    add() {
        this.addTag = true;
    }

    getTagById(tag: Tags) {
        this.tagService.getTagById(tag.id).subscribe((response) => {
            this.tag = response[0];
            console.log(this.tag);
            this.edit = true;
        });
    }

    addTags(tag: Tags) {

        this.tagService.addTag(tag).subscribe((response) => {
            this.tag = response;
            console.log(this.tag);
            this.addTag = false;
            this.newTag = new Tags();
            this.getTag();
        });
    }

    updateTag(tag: Tags) {
        this.tagService.updateTag(tag, tag.id).subscribe((response) => {
            this.tag = response;
            console.log(this.tag);
            this.edit = false;
            this.getTag();
        });
    }

    deleteTag(tag: Tags) {
        this.tagService.deleteTag(tag.id).subscribe((response) => {
            this.tag = response;
            console.log(this.tag);
            this.getTag();
        });

    }
}