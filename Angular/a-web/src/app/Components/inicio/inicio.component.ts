import {Component, OnInit} from '@angular/core';
import {Http} from "@angular/http";
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  nombre: string = "Andres";
  planetas=[];
  arreglousuarios = [{

    nombre: "andres",
    apellido: "paredes",
    conectado:true
  }, {
    nombre: "David",
    apellido: "Ruano",
    conectado:true
  }, {
    nombre: "GIng",
    apellido: "Freacks",
    conectado:false
  },{
    nombre: "Gon",
    apellido: "Freacks",
    conectado:true

  }]

  constructor(private _http:Http ) {

  }

  ngOnInit() {
  }

  cambiarNombre(): void {
    this.nombre = 'David';
  }

  cambiarotroNombre() {
    this.nombre = 'GING';
  }

  cambiarNombreInput(nombreEtiqueta) {
    console.log(nombreEtiqueta.value);
    console.log(nombreEtiqueta.type);
    this.nombre = nombreEtiqueta.value;
  }

  cargarPlanetas(){
    this._http
      .get("http://swapi.co/api/planets")
      //.map(response=>response.json())
      .subscribe(
        (response)=>{
          console.log("Response",response)
          console.log(response.json())
          let respuesta=response.json();
          console.log(respuesta.next)
          this.planetas=respuesta.results;
        },
        (error)=>{
          console.log("Error",error)
        },
        ()=>{
          console.log("Finaly")
        }
      )
  }

}
interface PlanetaStarWars {
  name: string;
  rotation_period: number;
  orbital_period: number;
  diameter: number;
  climate: string;
  gravity: string;
  terrain: string;
  surface_water: number;
  population: number;
  residents: string[];
  films: string[];
  created: string;
  edited: string;
  url: string;
}
