import {Component, Input, OnInit} from '@angular/core';
import {moviesInterface} from "../Interfaces/moviesInterface";

@Component({
  selector: 'app-studio-gibli-movies',
  templateUrl: './studio-gibli-movies.component.html',
  styleUrls: ['./studio-gibli-movies.component.css']
})
export class StudioGibliMoviesComponent implements OnInit {
  @Input() movie: moviesInterface;
  constructor() { }

  ngOnInit() {
  }

}
