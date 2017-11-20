import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../../services/category.service';
import { Category } from '../../../models/Category';

@Component({
	selector: 'app-category',
	templateUrl: './category.component.html',
	styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
		
	categories: Category[];
	constructor(private _categoryService: CategoryService) { }

	ngOnInit() {
		this._categoryService.getAll().subscribe(data=> {
			this.categories = data['categories'];
		});
	}

	remove(category, index) {
		this._categoryService.remove(category.id)
		.subscribe(data=> {
			this.categories.splice(index, 1);
		})
	}

	onCreatedCategory(category) {
		this.categories.push(category);
	}

}
