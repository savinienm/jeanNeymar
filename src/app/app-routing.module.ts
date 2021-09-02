import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AProposComponent } from './components/a-propos/a-propos.component';
import { AccueilComponent } from './components/accueil/accueil.component';
import { OeuvresComponent } from './components/oeuvres/oeuvres.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: AccueilComponent },
  { path: 'apropos', component: AProposComponent },
  { path: 'oeuvres', component: OeuvresComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
