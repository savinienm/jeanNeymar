import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

const httpOptions = {
  headers: new HttpHeaders({ 
    'Access-Control-Allow-Origin':'*',
  })
};

@Injectable({
  providedIn: 'root'
})
export class OeuvresService {

  oeuvres=[ 
    {id: 0, title:'Après coup, Jean Rigole', image:'/assets/img/livre1.jpg', synopsis:'« Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt molestias dolorum expedita necessitatibus rem ullam vel consectetur sapiente porro. Magnam, aspernatur maiores debitis deleniti iure illo dolore libero consectetur consequuntur ! »'},
    {id: 1, title:'Des vacances aux Bahamas', image:'/assets/img/livre2.jpg', synopsis:'« Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt molestias dolorum expedita necessitatibus rem ullam vel consectetur sapiente porro. Magnam, aspernatur maiores debitis deleniti iure illo dolore libero consectetur consequuntur ! »'}, 
    {id: 2, title:'Il me reste encore un œil', image:'/assets/img/livre3.jpg', synopsis:'« Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt molestias dolorum expedita necessitatibus rem ullam vel consectetur sapiente porro. Magnam, aspernatur maiores debitis deleniti iure illo dolore libero consectetur consequuntur ! »'}
  ]

  apiUrl = 'http://localhost:4200/books'

  constructor() { }

  getOeuvres() {
    return this.oeuvres;
  }

  getOeuvre(id: number) {
    return this.oeuvres[id]
  }
  
}


  


