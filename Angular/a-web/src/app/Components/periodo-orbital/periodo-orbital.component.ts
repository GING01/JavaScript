import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-periodo-orbital',
  templateUrl: './periodo-orbital.component.html',
  styleUrls: ['./periodo-orbital.component.css']
})
export class PeriodoOrbitalComponent implements OnInit {
  @Input () orbital_period: number;
  constructor() { }

  ngOnInit() {
  }

}
