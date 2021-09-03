import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OeuvresRoutingModule } from './oeuvres-routing.module';
import { OeuvresComponent } from './oeuvres/oeuvres.component';
import { OeuvreComponent } from './oeuvre/oeuvre.component';

@NgModule({
  declarations: [
    OeuvresComponent,
    OeuvreComponent
  ],
  imports: [
    CommonModule,
    OeuvresRoutingModule
  ]
})

export class OeuvresModule { }
