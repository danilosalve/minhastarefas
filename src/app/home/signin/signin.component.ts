import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SignUpService } from '../signup/signup.service';
import { NewUser } from '../signup/new-user';
import { UserService } from 'src/app/core/user/user.service';

@Component({
    templateUrl: './signin.component.html'
})
export class SignInComponent implements OnInit {
    @Input() mostrar = false;
    @Input() msgerro = '';
    loginForm: FormGroup;
    user: NewUser[] = [];    

    constructor(
        private formBuilder: FormBuilder,
        private signUpService: SignUpService,
        private router: Router,
        private userService: UserService
        ){}
    
    
    ngOnInit(): void {
        this.loginForm = this.formBuilder.group({
            email: ['',
                [
                    Validators.required,
                    Validators.email
                ]
            ],
            password: ['',
                Validators.required
            ]
        })
    }

    login(){
        const email = this.loginForm.get('email').value;
        const password = this.loginForm.get('password').value;
        let token: string = '';
    
        this.signUpService
            .getLogin(email)
            .subscribe(
                user => {                    
                    this.user = this.user.concat(user);
                    if ( user.length >= 1){
                        if (user[0].email == email && user[0].password == password) {                                                    
                            token = '{ "userName": "' + user[0].userName + '" }'
                            this.userService.setToken(token);

                            this.router.navigate(['/todotask']);
                        } else {
                            this.mostrar = true;                            
                            this.msgerro = 'Usuario ou senha incorreta!';
                        }
                    } else {
                        this.mostrar = true;
                        this.msgerro = 'Usuario não autenticado!';
                    }
                },
                err => console.log(err)
            );        
    }
}