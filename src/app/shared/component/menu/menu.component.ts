
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { UserService } from 'src/app/core/user/user.service';
import { User } from 'src/app/core/user/user';

@Component({
    selector: 'mt-menu',
    templateUrl: './menu.component.html'
})
export class MenuComponent{

    user$: Observable<User>;
    user: User;

    constructor(
        private router: Router,        
        private userService: UserService
    ){
        this.user$ = userService.getUser();
        this.user$.subscribe(user => this.user = user);
    }
    
    logout(){        
        this.userService.logout();
        this.router.navigate(['']);
    }
}