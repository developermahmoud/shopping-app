import { Component, OnInit } from '@angular/core';
import { UserService } from './../../services/user.service';
import { User } from './../../models/user';
import { NgForm } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http/src/response';
@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
	user:User;
	disabledBtn: boolean = false;
	showErrorMsg: boolean = false;
	constructor(private _userService: UserService) { 
		this.user = {
			email: '',
			password: ''
		}
	}

	ngOnInit() {
	}

	login(form: NgForm) {
		this.disabledBtn = true;
		this.showErrorMsg = false;
		this.user = {
			email: form.value.email,
			password: form.value.password
		};
		this._userService.login(this.user).subscribe(data=>{
			form.reset();
			localStorage.setItem('user', JSON.stringify(data['user']));
			localStorage.setItem('token', data['token']);
			window.location.href = "/";
		},
		(error: HttpErrorResponse)=> {
			this.disabledBtn = false;
			this.showErrorMsg = true;
		});
	}

}
