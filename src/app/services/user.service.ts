import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { Observable } from 'rxjs';

import { User } from './../models/user';

@Injectable()
export class UserService {

    constructor(private _http: HttpClient) { }

    store(user: User) {
        const header = new HttpHeaders();
        header.append('Content-Type', 'application/json');
        header.append('X-Requested-With', 'XMLHttpRequest');

        return this._http.post(environment.url + 'users', user, {
            headers: header
        });
    }

    login(user: User) {     
        const header = new HttpHeaders();
        header.append('Content-Type', 'application/json');
        header.append('X-Requested-With', 'XMLHttpRequest');

        return this._http.post(environment.url + 'users/login', user, {
            headers: header
        });
    }

}
