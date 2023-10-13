import { Injectable } from "@angular/core";
import { Ingredient } from "./ingredient.model";
import { HttpClient } from '@angular/common/http';

@Injectable({providedIn: 'root'})
export class FoodMenuService{

    constructor(private http:HttpClient){

    }
    getAll(){
        const url = "http://localhost:3000/recipeBook";
        return this.http.get(url);
    }
}