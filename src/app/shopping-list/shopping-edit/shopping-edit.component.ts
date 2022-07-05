import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
	selector: 'app-shopping-edit',
	templateUrl: './shopping-edit.component.html',
	styleUrls: ['./shopping-edit.component.scss']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {

	ingredientForm = new FormGroup({
		'name': new FormControl(null,[Validators.required]),
		'amount': new FormControl(null,[Validators.required, Validators.pattern('^[1-9]+[0-9]*$')])
	});
	editedIndex: number;
	editedIngredient: Ingredient;
	editMode: boolean = false;
	editIngredientSubscription: Subscription;
	constructor(private shoppingListService: ShoppingListService) { }

	ngOnInit(): void {
		this.editIngredientSubscription = this.shoppingListService.editIngredientIndex.subscribe((index: number)=>{
			this.editedIndex = index;
			this.editMode = true;
			this.editedIngredient = this.shoppingListService.getEditedIngredient(index);
			this.ingredientForm.setValue({
				'name': this.editedIngredient.name,
				'amount': this.editedIngredient.amount
			});
		});
	}
	onSubmit(){
		const newIngredient = new Ingredient(this.ingredientForm.get('name').value, this.ingredientForm.get('amount').value);
		if(this.editMode){
			this.shoppingListService.updateIngredient(this.editedIndex, newIngredient);
		}else{
			this.shoppingListService.addIngredient(newIngredient);
		}
		this.editMode = false;
		this.ingredientForm.reset();
	}
	onDelete(){
		this.shoppingListService.deleteIngredient(this.editedIndex);
		this.onClear();
	}
	onClear(){	
		this.ingredientForm.reset();
		this.editMode = false;
	}
	ngOnDestroy(): void {
		this.editIngredientSubscription.unsubscribe();
	}
}
