import {Component, OnInit} from '@angular/core';
import {Http} from "@angular/http";
import 'rxjs/add/operator/map';
import {PlanetaStarWarsInterface} from "../Interfaces/PlanetaStarWarsInterface";
import {UsuarioClass} from "../../Clases/usuarioClase";

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  nombre: string = "Andres";
  nuevoUsuario:UsuarioClass=new UsuarioClass("");
  planetas: PlanetaStarWarsInterface[];
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
    console.log('nuevo usuario',this.nuevoUsuario);
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
          this.planetas=this.planetas.map(
            (planeta)=>{
              planeta.imagenURL="/assets/imagenes/"+planeta.name+".jpg";
              return planeta;
            }
          );
        },
        (error)=>{
          console.log("Error",error)
        },
        ()=>{
          console.log("Finaly")
        }
      )
  }

  crearUsuario(){
    let usuario:UsuarioClass={
      nombre:this.nuevoUsuario.nombre
    }
    this._http.post("http://localhost:1337/usuario",usuario)
      .subscribe(
        respuesta=>{
          let respuestaJson=respuesta.json();
          console.log('Respuesta',respuesta);
        },
        error => {
          console.log('Error');
        },

      )
  }

}


