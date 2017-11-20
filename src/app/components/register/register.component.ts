import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { UserService } from './../../services/user.service';
import { User } from './../../models/user';

@Component({
	selector: 'app-register',
	templateUrl: './register.component.html',
	styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

	user: User;
	disableBtn: boolean = false;
	showSuccess: boolean = false;
	errors = [];

	constructor(private _userService: UserService, private _router: Router) {
		this.user = { name: '', email: '', password: '' };
	}

	ngOnInit() { }

	register(form: NgForm) {

		this.disableBtn = true;
		this.showSuccess = false;
		this.errors = [];


		this.user.name = form.value.name;
		this.user.email = form.value.email;
		this.user.password = form.value.password;

		this._userService.store(this.user).subscribe(data => {
			form.reset();
			this.showSuccess = true;
			localStorage.setItem('user', JSON.stringify(data['user']));
			localStorage.setItem('token', data['token']);
			window.location.href = "/";
		}, (err: HttpErrorResponse) => {
			this.disableBtn = false;
			this.errors = JSON.parse(JSON.stringify(err.error.errors));
		});
	}

}
