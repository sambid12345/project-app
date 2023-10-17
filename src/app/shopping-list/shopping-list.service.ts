import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { Subject } from "rxjs";

@Injectable({providedIn: 'root'})
export class ShoppingListService {
    ingredientsChanged = new Subject<Ingredient[]>();
    editIngredientIndex = new Subject<number>();
    private ingredients: Ingredient[] = [
		// new Ingredient('Apples','5'),
		// new Ingredient('Tomatos','10')
	];

    getEditedIngredient(index: number){
        return this.ingredients[index];
    }
    addIngredient(ingredient: Ingredient){
		this.ingredients.push(ingredient);
        this.ingredientsChanged.next(this.ingredients.slice());
	}
    deleteIngredient(index:number){
        this.ingredients.splice(index,1);
        this.ingredientsChanged.next(this.ingredients.slice());
    }
    updateIngredient(index: number,newIngredient: Ingredient){
        this.ingredients[index] = newIngredient;
        this.ingredientsChanged.next(this.ingredients.slice());
    }
    getIngredient(){
        return this.ingredients.slice();
    }
    addIngredientFromRecipe(ingredients: Ingredient[]){
       this.ingredients.push(...ingredients);
       this.ingredientsChanged.next(this.ingredients.slice());
    }
}