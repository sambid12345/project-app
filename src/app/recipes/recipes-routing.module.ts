import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "../auth/auth.guard.service";
import { RecipeDetailComponent } from "./recipe-detail/recipe-detail.component";
import { RecipeEditComponent } from "./recipe-edit/recipe-edit.component";
import { RecipeStartComponent } from "./recipe-start/recipe-start.component";
import { RecipesComponent } from "./recipes.component";
import { RecipesResolverService } from "./recipes.resolver.service";


const routes: Routes = [
	{path: '', component: RecipesComponent, children:[
		{path: '', component: RecipeStartComponent},
		{path: 'new', component: RecipeEditComponent},
		{path:':id', component: RecipeDetailComponent, resolve:[RecipesResolverService]},
		{path: ':id/edit', component: RecipeEditComponent, resolve:[RecipesResolverService]}
	], canActivate: [AuthGuard]},

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RecipesRoutingModule{

}