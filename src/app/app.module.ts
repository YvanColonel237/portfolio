import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HeaderComponent} from "./components/header/header.component";
import {HeroComponent} from "./components/hero/hero.component";
import {AboutComponent} from "./components/about/about.component";
import {ProjectsComponent} from "./components/projects/projects.component";
import {FooterComponent} from "./components/footer/footer.component";

// Importe tous tes components ici...

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeroComponent,
    AboutComponent,
    ProjectsComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule, // ← Important !
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
