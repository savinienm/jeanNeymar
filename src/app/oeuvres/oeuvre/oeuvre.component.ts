import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OeuvresService } from 'src/app/oeuvres.service';

@Component({
  selector: 'app-oeuvre',
  templateUrl: './oeuvre.component.html',
  styleUrls: ['./oeuvre.component.scss']
})
export class OeuvreComponent implements OnInit {

  oeuvre: any;

  constructor(private route: ActivatedRoute, private oeuvreService: OeuvresService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = params['id'];
      this.oeuvre =this.oeuvreService.getOeuvre(id)
    })
  }

}
