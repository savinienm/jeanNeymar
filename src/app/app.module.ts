import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { AccueilComponent } from './components/accueil/accueil.component';
import { AProposComponent } from './components/a-propos/a-propos.component';
import { OeuvresComponent } from './components/oeuvres/oeuvres.component';
import { OeuvreComponent } from './components/oeuvre/oeuvre.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    AccueilComponent,
    AProposComponent,
    OeuvresComponent,
    OeuvreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
