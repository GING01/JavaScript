import {Component, Input, OnInit} from '@angular/core';
import {moviesInterface} from "../Interfaces/moviesInterface";
import 'rxjs/add/operator/map';
import {Http} from '@angular/http';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  @Input() movies: moviesInterface;
  arregloImagenes = [
    'http://watchcartoonsonline.eu/wp-content/uploads/2015/10/Castle-in-the-Sky-1986.jpg',
    'http://static.rogerebert.com/uploads/movie/movie_poster/grave-of-the-fireflies-1988/large_bwVhmPpydv8P7mWfrmL3XVw0MV5.jpg',
    'http://vignette3.wikia.nocookie.net/studio-ghibli/images/0/02/My_Neighbor_Totoro_-_Tonari_no_Totoro_%28Movie_Poster%29.jpg/revision/latest?cb=20160625112457',
    'https://images-na.ssl-images-amazon.com/images/I/61urbL5Q4vL.jpg',
    'http://static.rogerebert.com/uploads/movie/movie_poster/only-yesterday-2016/large_large_24DqWbbkKI0ReUooSJiIqzURp3g.jpg',
    'https://upload.wikimedia.org/wikipedia/en/f/fc/Porco_Rosso_%28Movie_Poster%29.jpg',
    'https://images-na.ssl-images-amazon.com/images/I/51Et-gGE4IL.jpg',
    'https://images-na.ssl-images-amazon.com/images/I/51MA1N0V2AL.jpg',
    'https://upload.wikimedia.org/wikipedia/en/2/24/Princess_Mononoke_Japanese_Poster_%28Movie%29.jpg',
    'https://upload.wikimedia.org/wikipedia/en/2/26/Yamadas.jpg',
    'https://images-na.ssl-images-amazon.com/images/M/MV5BOGJjNzZmMmUtMjljNC00ZjU5LWJiODQtZmEzZTU0MjBlNzgxL2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_UY1200_CR90,0,630,1200_AL_.jpg',
    'https://images-na.ssl-images-amazon.com/images/I/51Y9GA5ZTPL.jpg',
    'http://static.tvtropes.org/pmwiki/pub/images/howls-moving-castle_7410.jpg',
    'https://images-na.ssl-images-amazon.com/images/I/51TjeoJ1DjL._SX301_BO1,204,203,200_.jpg',
    'https://lh3.googleusercontent.com/-ktQMyQf5Z70/UTrJewo4KMI/AAAAAAAAAXg/wUOKYjDJ1ZQ/s728/2008+Gake+no+ue+no+Ponyo+-+Ponyo+en+el+acantilado+%28mex%29+03.jpg',
    'https://upload.wikimedia.org/wikipedia/en/e/e7/Karigurashi_no_Arrietty_poster.png',
    'https://images-na.ssl-images-amazon.com/images/M/MV5BMjMzMzM2NTM2NV5BMl5BanBnXkFtZTcwNTk4OTYwOQ@@._V1_.jpg',
    'https://sergiosbackupsite.files.wordpress.com/2014/07/the-wind-rises-poster-1.jpg',
    'http://www.flickeringmyth.com/wp-content/uploads/2015/02/The-Tale-of-the-Princess-Kaguya-600x450.jpg',
    'http://www.dafont.com/forum/attach/orig/5/0/502278.jpg'



  ];
  constructor(private _http: Http) { }

  ngOnInit() {
  }
  cargarPeliculas() {
      this._http
        .get('https://ghibliapi.herokuapp.com/films')
        .subscribe(
          (reponse) => {
            console.log('Response: ', reponse.json());
            console.log(reponse.json());
            let respuesta = reponse.json();
            console.log(respuesta.next);
            this.movies = (respuesta);
          },
          (error) => {
            console.log('Error: ', error);
          },
          () => {
            console.log('Finally');

          }
        );
    }

}
