import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from './shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { RecipeBookComponent } from './recipe-book/recipe-book.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialExampleModule } from './shared/material.module';
import { ToDoComponent } from './to-do/to-do.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {DragDropModule} from '@angular/cdk/drag-drop';

@NgModule({
	declarations: [
		AppComponent,
		HeaderComponent,	
		RecipeBookComponent, 
		ToDoComponent,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		ReactiveFormsModule,
		FormsModule,
		HttpClientModule,
		SharedModule,
		FlexLayoutModule,
		MaterialExampleModule,
		BrowserAnimationsModule,
		DragDropModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
