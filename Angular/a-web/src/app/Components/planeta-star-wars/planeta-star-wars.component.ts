import {Component, Input, OnInit} from '@angular/core';
import {PlanetaStarWarsInterface} from "../Interfaces/PlanetaStarWarsInterface";

@Component({
  selector: 'app-planeta-star-wars',
  templateUrl: './planeta-star-wars.component.html',
  styleUrls: ['./planeta-star-wars.component.css']
})
export class PlanetaStarWarsComponent implements OnInit {
@Input() planeta: PlanetaStarWarsInterface;
  constructor() { }

  ngOnInit() {

  }

}
