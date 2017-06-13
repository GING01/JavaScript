import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-diametro',
  templateUrl: './diametro.component.html',
  styleUrls: ['./diametro.component.css']
})
export class DiametroComponent implements OnInit {
  @Input () diametro: number;
  constructor() { }

  ngOnInit() {
  }

}
