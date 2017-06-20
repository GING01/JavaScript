import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-critica',
  templateUrl: './critica.component.html',
  styleUrls: ['./critica.component.css']
})
export class CriticaComponent implements OnInit {
  @Input () critica: string;
  constructor() { }

  ngOnInit() {
  }

}
