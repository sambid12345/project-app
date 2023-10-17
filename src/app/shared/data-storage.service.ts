import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { exhaustMap, map, take, tap } from "rxjs/operators";
import { AuthService } from "../auth/auth.service";
import { Recipe } from "../recipes/recipe.model";
import { RecipeService } from "../recipes/recipe.service";

@Injectable({providedIn: 'root'})
export class DataStorageService{
    constructor(private http: HttpClient, private recipeService: RecipeService, private authService: AuthService){}
    
    storeRecipe(){
        const recipe = this.recipeService.getRecipes();
        const url = 'https://angular-tutorialbe-default-rtdb.firebaseio.com/recipes.json';

        return this.authService.user.pipe(take(1),exhaustMap(user =>{
            return this.http.put(url,recipe,
                {params: new HttpParams().set('auth', user?.token)});
        }))   
    }
    fetchRecipe(){
        return this.authService.user.pipe(take(1),exhaustMap(user =>{
            // const url = 'https://angular-tutorialbe-default-rtdb.firebaseio.com/recipes.json';
            const url = 'http://localhost:3000/fetchRecipe'
            return this.http.get<Recipe[]>(url
                // ,
                // {
                //     params: new HttpParams().set('auth', user?.token)
                // }
                )
        }), tap((recipeList)=>{console.log('Recipe List', recipeList)}),
        map(recipes =>{
            return recipes.map(recipe=>{
                return {...recipe, ingredient: recipe.ingredient? recipe.ingredient: []};
            });
        }),
        tap(recipes=>{
            this.recipeService.setRecipe(recipes);
        })
        );
    }
}