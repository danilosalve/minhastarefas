import { Injectable } from '@angular/core';3
import { Router } from '@angular/router';
import { SignUpService } from 'src/app/home/signup/signup.service';
import { UserService } from '../user/user.service';

@Injectable({
    providedIn: 'root'
})

export class AuthGuard{

    constructor(
        private router: Router        ,
        private userService: UserService
    ) { }

    canActivate() {
        const currentUser  = this.userService.getUserName();        
        if (currentUser) {            
            return true;
        }
        
        this.router.navigate(['']);
        return false;
    }
}
