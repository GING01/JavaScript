import {Component, Input, OnInit} from '@angular/core';
import {Http} from "@angular/http";
import 'rxjs/add/operator/map';
import {ArtistasClass} from "../Clases/ArtistasClass";


@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styleUrls: ['./artista.component.css']
})
export class ArtistaComponent implements OnInit {
  artistas: ArtistasClass[] = [];
  @Input() nuevoArtista: ArtistasClass = new ArtistasClass("");


  constructor(private _http: Http) { }

  ngOnInit() {
    this._http
      .get("http://localhost:1337/Artista")
      .subscribe(
        respuesta => {
          let rjson: ArtistasClass[] = respuesta.json();

          this.artistas = rjson;

          console.log("Artistas: ", this.artistas);
        },
        error => {
          console.log("Error: ", error)

        }
      );
  }
  eliminarArtista(artista: ArtistasClass, indice: number) {
    this._http.delete(`http://localhost:1337/Artista/${artista.id}`)
      .subscribe(
        respuesta => {
          console.log('Indice con index: ', artista.id);
          let artistaBorrado;
          artistaBorrado = respuesta.json();
          this.artistas = this.artistas.filter(value => artistaBorrado.id != value.id);


        },
        error => {
          console.log('Error', error);
        }
      );
  }
  crearArtista(){
    let artista: ArtistasClass = {
      nombre: this.nuevoArtista.nombre,
      estilo: this.nuevoArtista.estilo,
      paisResidencia: this.nuevoArtista.paisResidencia

    }
    this._http.post("http://localhost:1337/Artista", artista)
      .subscribe(
        respuesta => {

          console.log(respuesta);
          this.artistas.push(respuesta.json());
          this.nuevoArtista = {};

        },
        error => {
          console.log('Error', error);
        }
      );
  }
}

