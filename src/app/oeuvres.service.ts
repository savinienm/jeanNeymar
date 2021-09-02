import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OeuvresService {

  oeuvres=[{title:'Jean Neymar', image:'Profil de Jean Neymar', synopsis:'lorem'}, {title:'Jean Neymar', image:'Profil de Jean Neymar', synopsis:'lorem'}, {title:'Jean Neymar', image:'Profil de Jean Neymar', synopsis:'lorem'}]

  constructor() { }

  getOeuvres() {
    return this.oeuvres;
  }
  
}
