import { Component, OnInit } from '@angular/core';
import { OeuvresService } from 'src/app/oeuvres.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent implements OnInit {

  oeuvres: any = {};
  
  constructor(private OeuvresService: OeuvresService) { }

  ngOnInit(): void {
    this.oeuvres=this.OeuvresService.getOeuvres();
  }

}
