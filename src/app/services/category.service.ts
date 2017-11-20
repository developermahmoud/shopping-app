import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Category } from '../models/Category';
import { environment } from '../../environments/environment';

@Injectable()
export class CategoryService {

	constructor(private _http: HttpClient) { }
	
	getAll() {
		return this._http.get(environment.url + 'categories');
	}

	remove(id) {
		return this._http.delete(environment.url + 'categories/' + id);
	}

	store(category: Category)
	{
		let header = new HttpHeaders();
		header.append('Content-Type', 'application/json');
        header.append('X-Requested-With', 'XMLHttpRequest');
		return this._http.post(environment.url + 'categories', category)
	}

}
