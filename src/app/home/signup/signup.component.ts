import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { lowerCaseValidator } from 'src/app/shared/validators/lower-case.validator';
import { SignUpService } from './signup.service';

@Component({
    templateUrl: './signup.component.html'    
})

export class SignUpComponent implements OnInit {
    signupForm: FormGroup;

    constructor(
        private formBuilder: FormBuilder,            
        private signUpService: SignUpService,
        private router: Router) 
    {}
    
    ngOnInit(): void {
        this.signupForm = this.formBuilder.group({
            userName: ['',
                [
                    Validators.required,
                    lowerCaseValidator,
                    Validators.minLength(2),
                    Validators.maxLength(20)
                ],                           
            ],
            email: ['',
                [
                    Validators.required,
                    Validators.email
                ]
            ],
            password: ['',
                [
                    Validators.required,
                    Validators.maxLength(20)
                ]
            ]
        });
    }

    signup(): void{
        const newUser = this.signupForm.getRawValue();        
        this.signUpService
            .createUser(newUser)
            .subscribe(
                () => this.router.navigate(['/home']),
                err => console.log(err)
        );
    }
}