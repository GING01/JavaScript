import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-lanzamiento',
  templateUrl: './lanzamiento.component.html',
  styleUrls: ['./lanzamiento.component.css']
})
export class LanzamientoComponent implements OnInit {
  @Input () lanzamiento: string;
  constructor() { }

  ngOnInit() {
  }

}
