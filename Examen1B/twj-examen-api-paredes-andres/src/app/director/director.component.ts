import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-director',
  templateUrl: './director.component.html',
  styleUrls: ['./director.component.css']
})
export class DirectorComponent implements OnInit {
  @Input () director: string;
  constructor() { }

  ngOnInit() {
  }

}
