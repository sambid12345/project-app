import { Injectable } from "@angular/core";
import { Subject } from "rxjs/Subject";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";
// import { Subject } from "rxjs";
@Injectable() 
export class RecipeService {
    recipeChanged = new Subject<Recipe[]>();
    // private recipes: Recipe[] = [
	// 	new Recipe('Pizza Dough',
    //     'The Best Flour for Homemade Pizza Dough',
    //     'https://www.simplyrecipes.com/thmb/mbN8mXZ0srgAT1YrDU61183t0uM=/648x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Simply-Recipes-Homemade-Pizza-Dough-Lead-Shot-1b-ea13798d224048b3a28afb0936c9b645.jpg',
    //     [new Ingredient('Meat',2), new Ingredient('Burger',3)]),
	// 	new Recipe('poached apricots',
    //     'Delicate poached apricots with cream and toasted almonds',
    //     'https://i.guim.co.uk/img/media/aa320b5f77eabaf8a308020f9745545b0f81a774/111_2020_5571_6052/master/5571.jpg?width=940&quality=45&auto=format&fit=max&dpr=2&s=520ab463bb3cad5dfe24f0cef9e105af',
    //     [new Ingredient('Bun',2), new Ingredient('Fries',10)])
	// ];
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
    getRecipeById(id: number){
        return this.recipes[id];
    }
    addIngredientToShoppingList(ingredient: Ingredient[]){
        this.shoppingListService.addIngredientFromRecipe(ingredient);
    }
}