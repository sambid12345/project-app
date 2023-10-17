import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
	selector: 'app-recipe-edit',
	templateUrl: './recipe-edit.component.html',
	styleUrls: ['./recipe-edit.component.scss']
})
export class RecipeEditComponent implements OnInit {
	id: any;
	editExistRecipeMode: boolean = false;
	recipeForm : FormGroup
	

	constructor(private route: ActivatedRoute, private recipeService: RecipeService, private router: Router) { }

	ngOnInit(): void {
		this.route.params.subscribe(
			(params: Params) => {
				this.id = params['id'];
				this.editExistRecipeMode = params['id']?true:false;
				this.initRecipeForm();
			}
		);
	}
	onCancel(){
		this.router.navigate(['../'], {relativeTo: this.route})
	}
	private initRecipeForm(): void{
		let recipeName = '', 
			recipeDescription = '', 
			recipeImagePath ='',
			recipeIngredient = new FormArray([]);

		if(this.editExistRecipeMode){
			const recipe = this.recipeService.getRecipeById(this.id);
			recipeName = recipe.name;
			recipeDescription = recipe.description;
			recipeImagePath = recipe.imagePath
			if(recipe['ingredient']){
				for(let ing of recipe.ingredient){
					recipeIngredient.push(
						new FormGroup({
							'name': new FormControl(ing.name, [Validators.required]),
							'amount': new FormControl(ing.amount, [Validators.required])
						})
					);
				}
			}
		}
		this.recipeForm = new FormGroup({
			'name': new FormControl(recipeName,[Validators.required]),
			'imagePath': new FormControl(recipeImagePath, [Validators.required]),
			'description': new FormControl(recipeDescription, [Validators.required]),
			'ingredient': recipeIngredient

		});
	}
	get ingredientControl(){
		return (<FormArray>this.recipeForm.get('ingredient')).controls;
	}
	onSubmit(){
		console.log(this.recipeForm);
		const newRecipe = new Recipe(
			this.recipeForm.get('name').value,
			this.recipeForm.get('description').value,
			this.recipeForm.get('imagePath').value,
			this.recipeForm.get('ingredient').value
		);
		if(this.editExistRecipeMode){
			this.recipeService.updateRecipe(this.id,newRecipe);
		}else{
			this.recipeService.addRecipe(newRecipe);
		}
	}
	addIngredient(){
		(<FormArray>this.recipeForm.get('ingredient')).push(
			new FormGroup({
				'name': new FormControl(null, [Validators.required]),
				'amount': new FormControl(null, [Validators.required])
			})
		);
	}
	cancelIngredient(index: number){
		(<FormArray>this.recipeForm.get('ingredient')).removeAt(index);
	}

}
