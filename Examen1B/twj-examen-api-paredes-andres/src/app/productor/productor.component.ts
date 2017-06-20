import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-productor',
  templateUrl: './productor.component.html',
  styleUrls: ['./productor.component.css']
})
export class ProductorComponent implements OnInit {
  @Input () productor: string;
  constructor() { }

  ngOnInit() {
  }

}
