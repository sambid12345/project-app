
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { ShoppingEditComponent } from "./shopping-edit/shopping-edit.component";
import { ShoppingListRoutingModule } from "./shopping-list-routing.module";
import { ShoppingListComponent } from "./shopping-list.component";


@NgModule({
	declarations: [
		ShoppingListComponent,
		ShoppingEditComponent,
	],
	exports: [],
	imports: [
		CommonModule,
		ReactiveFormsModule,
		RouterModule,
		ShoppingListRoutingModule
	]
})
export class ShoppingListModule {

}