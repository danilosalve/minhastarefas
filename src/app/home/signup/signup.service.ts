import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment'
import { NewUser } from './new-user';
import { map, catchError } from 'rxjs/operators';

const APIURL = environment.ApiUrl + '/user';

@Injectable({ providedIn: 'root' })
export class SignUpService {    

    constructor(private http: HttpClient) {}

    createUser(newUser: NewUser) {
        return this.http.post(APIURL , newUser);
    }

    getLogin( email: string) : Observable<NewUser[]>{
        const params = new HttpParams()            
            .append('email',email.trim());
    
        return this.http
            .get<NewUser[]>(APIURL, { params: params });
    }
}