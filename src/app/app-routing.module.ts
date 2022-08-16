import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { RecipeBookComponent } from './recipe-book/recipe-book.component';

const routes: Routes = [
	{path: '' , redirectTo: '/recipes', pathMatch: 'full'},
	{path: 'recipe-book', component: RecipeBookComponent},
	{path: 'recipes', loadChildren: () => 
		import('./recipes/recipes.module').then(r => r.RecipesModule)},
	{path: 'shopping-list', loadChildren: () => 
		import('./shopping-list/shopping-list.module').then(sl => sl.ShoppingListModule)},
	{path: 'auth', loadChildren: () => import('./auth/auth.module').then(a => a.AuthModule)}

];

@NgModule({
	imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
	exports: [RouterModule]
})
export class AppRoutingModule { }
