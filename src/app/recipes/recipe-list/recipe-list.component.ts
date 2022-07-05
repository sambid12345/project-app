import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
	selector: 'app-recipe-list',
	templateUrl: './recipe-list.component.html',
	styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit, OnDestroy {
	recipes: Recipe[];
	subscrbed: Subscription
	
	constructor(private recipeService: RecipeService, private router: Router, private route: ActivatedRoute) { }

	ngOnInit(): void {
		this.subscrbed = this.recipeService.recipeChanged.subscribe((recipe: Recipe[])=>{
			this.recipes = recipe;
		})
		this.recipes = this.recipeService.getRecipes();
	}
	onNewRecipe(){
		this.router.navigate(['new'], {relativeTo: this.route});
	}
	ngOnDestroy(): void {
		this.subscrbed.unsubscribe();
	}
}
