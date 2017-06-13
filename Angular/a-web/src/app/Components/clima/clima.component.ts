import {Component, Input, OnInit} from '@angular/core';
import {PlanetaStarWarsInterface} from "../Interfaces/PlanetaStarWarsInterface";

@Component({
  selector: 'app-clima',
  templateUrl: './clima.component.html',
  styleUrls: ['./clima.component.css']
})
export class ClimaComponent implements OnInit {
  @Input () clima: string;
  constructor() { }

  ngOnInit() {
  }

}
