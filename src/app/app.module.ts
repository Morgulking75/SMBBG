import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { MaterialModule } from './material.module';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HeaderComponent } from './header/header.component';

@NgModule({
	declarations: [
		AppComponent,
		HeaderComponent,
		HomeComponent
	],
	imports: [
		AppRoutingModule,
		BrowserAnimationsModule,
		BrowserModule,
		FontAwesomeModule,
		FormsModule,
		MaterialModule
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
