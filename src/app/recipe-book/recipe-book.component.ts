import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipes/recipe.model';
import { RecipeService } from '../recipes/recipe.service';
import { FoodMenuService } from '../shared/food-menu.service';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';

@Component({
	selector: 'app-recipe-book',
	templateUrl: './recipe-book.component.html',
	styleUrls: ['./recipe-book.component.scss']
})
export class RecipeBookComponent implements OnInit {

	recipeBook: any
	display: string = 'none';
	selectedFood: any;
	constructor(private foodMenuService: FoodMenuService, private recipeService: RecipeService, 
		public dialog: MatDialog, private http: HttpClient
		) { }

	ngOnInit(): void {
		this.recipeBook = null;
		this.foodMenuService.getAll().subscribe((recipeBook: any)=>{
			console.log(recipeBook);
			this.recipeBook = recipeBook
		}, (err)=>{
			console.log(err);
		})
	}
	addOnRecipe(){
		console.log(this.selectedFood);

		// const newRecipe = new Recipe(
		// 	food.name,
		// 	food.description,
		// 	food.imagePath,
		// 	food.ingredient
		// );	
		this.recipeService.addRecipe(this.selectedFood);
	}
	openModal(food: any) {
        this.display = "block";
		this.selectedFood = food;
    }
    onCloseHandled() {
        this.display = "none";
    }
}
