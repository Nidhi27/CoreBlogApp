import { Component, OnInit } from '@angular/core';
import { Category } from '../model/category';
import { CategoryService } from '../service/category.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
    selector: 'cat',
    templateUrl: './category.component.html',
    providers: [CategoryService]
})

export class CategoryComponent implements OnInit {
    category: Category;
    cats: Category[] = [];
    catList: Array<Category> = new Array<Category>();
    formLabel: string;
    isEditMode: boolean = false;
    addCat: boolean = false;
    Form: FormGroup;
    edit: boolean = false;
    newCat: Category = new Category();

    constructor(private catService: CategoryService, private _router: Router) {

    }

    ngOnInit() {

        this.getCategory();
    }

    private getCategory() {
        this.catService.getCategory().subscribe(Data => this.catList = Data);
    }

    add() {
        this.addCat = true;
    }

    getCatById(cat: Category) {
        this.catService.getCatById(cat.id).subscribe((response) => {
            this.category = response[0];
            console.log(this.category);
            this.edit = true;
        });
    }

    addCategory(cat: Category) {

        this.catService.addCategory(cat).subscribe((response) => {
            this.category = response;
            console.log(this.category);
            this.addCat = false;
            this.newCat = new Category();
            this.getCategory();
          
           
        });
    }

    updateCategory(cat: Category) {
        this.catService.updateCategory(cat, cat.id).subscribe((response) => {
            this.category = response;
            console.log(this.category);
            this.edit = false;
            this.getCategory();
        });
    }

    deleteCategory(cat: Category) {
        this.catService.deleteCategory(cat.id).subscribe((response) => {
            this.category = response;
            console.log(this.category);
            this.getCategory();
        });

    }
}