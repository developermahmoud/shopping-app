import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Category } from '../../../models/Category';
import { CategoryService } from '../../../services/category.service';

@Component({
	selector: 'app-create-category',
	templateUrl: './create-category.component.html',
	styleUrls: ['./create-category.component.css']
})
export class CreateCategoryComponent implements OnInit {
	@Output() created = new EventEmitter
	category: Category = {};
	disableBtn: boolean = false;
	showSuccess: boolean = false;
	constructor(private _categoryService: CategoryService) { }

	ngOnInit() {
	}

	store(form: NgForm) {
		this.showSuccess = false;
		this.disableBtn = true;
		this.category = {
			name: form.value.name
		}
		this._categoryService.store(this.category)
		.subscribe(data => {
			form.reset();
			this.showSuccess = true;
			this.disableBtn = false;
			this.created.emit(data)
		});
	}

	remove() {
		
	}

}
