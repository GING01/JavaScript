import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-gravedad',
  templateUrl: './gravedad.component.html',
  styleUrls: ['./gravedad.component.css']
})
export class GravedadComponent implements OnInit {
  @Input () gravedad: string;
  constructor() { }

  ngOnInit() {
  }

}
