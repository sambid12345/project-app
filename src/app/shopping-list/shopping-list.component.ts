import { Component, EventEmitter, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
	selector: 'app-shopping-list',
	templateUrl: './shopping-list.component.html',
	styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit, OnDestroy{

	private igChangedSub: Subscription
	ingredients: Ingredient[];
	constructor(private shoppingListService: ShoppingListService) { }

	ngOnInit(): void {
		this.ingredients = this.shoppingListService.getIngredient();
		this.igChangedSub = this.shoppingListService.ingredientsChanged.subscribe(
				(ingredient: Ingredient[])=>{
					this.ingredients = ingredient;
				}
			);
	}
	editIngredientFun(index: number){
		this.shoppingListService.editIngredientIndex.next(index);
	}
	ngOnDestroy(): void {
		this.igChangedSub.unsubscribe();
	}
}
