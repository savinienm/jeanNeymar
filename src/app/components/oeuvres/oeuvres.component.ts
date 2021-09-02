import { Component, OnInit } from '@angular/core';
import { OeuvresService } from '../../oeuvres.service';

@Component({
  selector: 'app-oeuvres',
  templateUrl: './oeuvres.component.html',
  styleUrls: ['./oeuvres.component.scss']
})
export class OeuvresComponent implements OnInit {

  oeuvres : any;

  constructor(private OeuvresService: OeuvresService) { }

  ngOnInit(): void {
    this.oeuvres=this.OeuvresService.getOeuvres();
  }

}
