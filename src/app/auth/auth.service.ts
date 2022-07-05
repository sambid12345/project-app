import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { BehaviorSubject, Subject } from "rxjs";
import { tap } from "rxjs/operators";
import { User } from "./user.model";

export interface AuthResponseData{
    idToken: string;
    email: string;
    refreshToken: string;	
    expiresIn: string;
    localId: string;
    registered?: boolean;
}

@Injectable({providedIn: 'root'})
export class AuthService{

    private expirationTimer: any
    user = new BehaviorSubject<User>(null);

    constructor(private http: HttpClient, private router: Router){}

    signup(email:string, password: string){
        const url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAzaNiS2wHQgfJcsVgBsi3_BehlMF7YTFY';
        const payload = {
            email: email,
            password: password,
            returnSecureToken: true
        };
        return this.http.post<AuthResponseData>(url,payload)
        .pipe(tap(resData =>{
            this.handleAunthetication(resData.email, resData.localId, resData.idToken, +resData.expiresIn);
        }));
    }

    signIn(email: string, password: string){
        const url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAzaNiS2wHQgfJcsVgBsi3_BehlMF7YTFY';
        const payload = {
            email: email,
            password: password,
            returnSecureToken: true
        };
        return this.http.post<AuthResponseData>(url,payload)
        .pipe(tap(resData =>{
            this.handleAunthetication(resData.email, resData.localId, resData.idToken, +resData.expiresIn);
        }));
    }

    logOut(){
        this.user.next(null);
        this.router.navigate(['./auth']);
        localStorage.removeItem('userData');
        if(this.expirationTimer){
            clearTimeout(this.expirationTimer);
        }
        this.expirationTimer = null;
    }
    autoLogOut(expirationDuration: number){
        setTimeout(() => {
            this.logOut();
        }, expirationDuration);
    }
    autoLogin(){
        const userData = JSON.parse(localStorage.getItem('userData'))
        if(!userData){
            return null;
        }

        const loggedUser = new User(userData.email, userData.id, userData._token, new Date(userData._tokenExpirationDate));
        if(loggedUser.token){
            this.user.next(loggedUser);
            const expirationDuration = new Date(userData._tokenExpirationDate).getTime() - new Date().getTime();
            this.autoLogOut(expirationDuration);
        }

    }
    private handleAunthetication(email: string, userId: string, token: string, expirsIn: number){
        const expirationDate = new Date(new Date().getTime() + expirsIn * 1000);
        const user = new User(email,userId, token, expirationDate);
        this.user.next(user);
        this.autoLogOut(expirsIn * 1000);
        localStorage.setItem('userData', JSON.stringify(user));
    }
}