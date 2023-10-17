import { Injectable } from "@angular/core";
import { Subject } from "rxjs/Subject";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";

@Injectable({providedIn: 'root'})
export class RecipeService {
    recipeChanged = new Subject<Recipe[]>();
    private recipes: Recipe[] = [];
    constructor(private shoppingListService: ShoppingListService){
        
    }
    setRecipe(recipes: Recipe[]){
        this.recipes = recipes;
        this.recipeChanged.next(this.recipes.slice());
    }
    addRecipe(recipe: Recipe){
        this.recipes.push(recipe);
        this.recipeChanged.next(this.recipes.slice());
    }
    updateRecipe(index: number,newRecipe: Recipe){
        this.recipes[index] = newRecipe;
        this.recipeChanged.next(this.recipes.slice());
    }
    deleteRecipe(index: number){
        this.recipes.splice(index,1);
        this.recipeChanged.next(this.recipes.slice());
    }
    getRecipes(){
        return this.recipes.slice();
    }
    getRecipeById(id: any){
       
        return this.recipes.find((recipe: Recipe)=>{
            return recipe._id === id;
        })
        // return this.recipes[id];
    }
    addIngredientToShoppingList(ingredient: Ingredient[]){
        this.shoppingListService.addIngredientFromRecipe(ingredient);
    }
}