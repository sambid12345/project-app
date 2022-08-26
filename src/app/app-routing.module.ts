import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { RecipeBookComponent } from './recipe-book/recipe-book.component';
import { ToDoComponent } from './to-do/to-do.component';

const routes: Routes = [
	{path: '' , redirectTo: '/recipes', pathMatch: 'full'},
	{path: 'recipe-book', component: RecipeBookComponent},
	{path: 'To-Do', component: ToDoComponent},
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
