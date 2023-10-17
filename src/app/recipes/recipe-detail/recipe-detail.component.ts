import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
	selector: 'app-recipe-detail',
	templateUrl: './recipe-detail.component.html',
	styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit {

	singleRecipe:Recipe
	id: any
	constructor(private recipeService: RecipeService, private router:Router, private route: ActivatedRoute) { }

	ngOnInit(): void {
		this.route.params.subscribe(
			(params: Params)=>{
				this.id = params['id'];
				this.singleRecipe = this.recipeService.getRecipeById(this.id);
			}
		);
	}
	onChange(value: any){
		console.log(value);
		if(value != null && value === 'To Shopping List'){
			this.recipeService.addIngredientToShoppingList(this.singleRecipe.ingredient);
		} else if(value === 'Edit Recipe'){
			this.router.navigate(['edit'],{relativeTo: this.route})
		} else if(value === 'Delete Recipe'){
			this.recipeService.deleteRecipe(this.id);
			this.router.navigate(['/recipes']);
		}
	}
}
