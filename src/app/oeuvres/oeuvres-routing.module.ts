import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OeuvresComponent } from './oeuvres/oeuvres.component';
import { OeuvreComponent } from './oeuvre/oeuvre.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: OeuvresComponent },
  { path: ':id', component: OeuvreComponent }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
  })
  
export class OeuvresRoutingModule { }
