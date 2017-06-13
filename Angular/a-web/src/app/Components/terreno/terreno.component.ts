import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-terreno',
  templateUrl: './terreno.component.html',
  styleUrls: ['./terreno.component.css']
})
export class TerrenoComponent implements OnInit {
  @Input () terreno: string;
  constructor() { }

  ngOnInit() {
  }

}
