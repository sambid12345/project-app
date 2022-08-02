import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { AuthResponseData, AuthService } from "./auth.service";

@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html',
    styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit{

    isLoginMode: boolean = true;
    isLoading: boolean = false;
    error: string = null;
    hidePassword: boolean = true;
     

    authForm: FormGroup
    ngOnInit(): void {
        this.initiateForm();
	}
    constructor(private authService: AuthService, private router: Router){

    }
    initiateForm(){
        this.authForm = new FormGroup({
            'email': new FormControl(null, [Validators.required, Validators.email]),
            "password": new FormControl(null, [Validators.required, Validators.minLength(6)])
        });
    }
    onSubmitForm(){
        let authObs: Observable<AuthResponseData>
        console.log(this.authForm);
        if(!this.authForm.valid){
            return;
        }
        const email = this.authForm.get('email').value;
        const password = this.authForm.get('password').value;
        this.isLoading = true;
        if(this.isLoginMode){
            authObs = this.authService.signIn(email, password);
        }else{
            authObs = this.authService.signup(email, password);
        }
        authObs.subscribe(
            (res)=>{             
                this.isLoading = false;
                this.router.navigate(['/recipes']);
            },
            (err)=>{
                this.error = err.error.error.message;
                this.isLoading = false;
            }
        );
        this.authForm.reset();
    }
    handleClose(){
        this.error = null;
    }
    onSwitch(){
        this.isLoginMode = !this.isLoginMode;
    }
    toggleVisible(){
        this.hidePassword = !this.hidePassword;
    }
}
