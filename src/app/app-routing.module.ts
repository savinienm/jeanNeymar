import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AProposComponent } from './components/a-propos/a-propos.component';
import { AccueilComponent } from './components/accueil/accueil.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: AccueilComponent },
  { path: 'apropos', component: AProposComponent },
  { path: 'books', loadChildren: () => import('./oeuvres/oeuvres.module').then(m => m.OeuvresModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
