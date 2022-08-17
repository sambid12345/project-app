import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from './shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { RecipeBookComponent } from './recipe-book/recipe-book.component';
import { MatSliderModule } from '@angular/material/slider';
import { MatCardModule } from "@angular/material/card";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from "@angular/material/button";
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialExampleModule } from './shared/material.module';

@NgModule({
	declarations: [
		AppComponent,
		HeaderComponent,	
		RecipeBookComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		ReactiveFormsModule,
		FormsModule,
		HttpClientModule,
		SharedModule,
		MatSliderModule,
		MatCardModule,
		MatToolbarModule,
		MatButtonModule,
		FlexLayoutModule,
		MaterialExampleModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
