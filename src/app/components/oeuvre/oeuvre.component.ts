import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-oeuvre',
  templateUrl: './oeuvre.component.html',
  styleUrls: ['./oeuvre.component.scss']
})
export class OeuvreComponent implements OnInit {

  @Input() oeuvre: any;

  constructor() { }

  ngOnInit(): void {
  }

}
