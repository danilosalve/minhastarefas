import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

import { User } from "./user";
import { TokenService } from "../token/token.service";

@Injectable({
    providedIn: 'root'
})
export class UserService{

    private userSubject = new BehaviorSubject<User>(null);
    private userName: string;

    constructor(private tokenService: TokenService) {
        this.tokenService.hasToken() &&
        this.decodeAndNotify();
    }

    setToken(token: string) {
        this.tokenService.setToken(token);
        this.decodeAndNotify();
    }

    getUser() {
        return this.userSubject.asObservable();
    }

    logout(){
        this.tokenService.removeToken();
        this.userSubject.next(null);
    }

    isLogged(){
        return this.tokenService.hasToken();
    }

    getUserName(){        
        return this.userName;
    }

    private decodeAndNotify(){
        const token = this.tokenService.getToken().toString();
        const user = JSON.parse(token);        
        this.userName = user.userName;
        this.userSubject.next(user);        
    }
}