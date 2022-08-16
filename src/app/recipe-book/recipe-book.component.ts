import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipes/recipe.model';
import { RecipeService } from '../recipes/recipe.service';
import { FoodMenuService } from '../shared/food-menu.service';

@Component({
	selector: 'app-recipe-book',
	templateUrl: './recipe-book.component.html',
	styleUrls: ['./recipe-book.component.scss']
})
export class RecipeBookComponent implements OnInit {

	recipeBook: any
	constructor(private foodMenuService: FoodMenuService, private recipeService: RecipeService) { }

	ngOnInit(): void {
		this.recipeBook = this.foodMenuService.getAll();
	}
	addOnRecipe(food:any){
		console.log(food);

		const newRecipe = new Recipe(
			food.name,
			food.description,
			food.imagePath,
			food.ingredient
		);	
		// this.recipeService.addRecipe(newRecipe);
	}

}
