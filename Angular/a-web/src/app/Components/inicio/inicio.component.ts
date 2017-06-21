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
  usuarios: UsuarioClass[] = [];
  nuevoUsuario: UsuarioClass = new UsuarioClass("");
  planetas: PlanetaStarWarsInterface[];
  arreglousuarios = [{

    nombre: "andres",
    apellido: "paredes",
    conectado: true
  }, {
    nombre: "David",
    apellido: "Ruano",
    conectado: true
  }, {
    nombre: "GIng",
    apellido: "Freacks",
    conectado: false
  }, {
    nombre: "Gon",
    apellido: "Freacks",
    conectado: true

  }]

  constructor(private _http: Http) {

  }

  ngOnInit() {
    this._http
      .get("http://localhost:1337/Usuario/")
      .subscribe(
        respuesta => {
          let rjson: UsuarioClass[] = respuesta.json();

          this.usuarios = rjson.map(
            (usuario)=>{
              usuario.editar=false;
              return usuario;

              //let objeto1:any= {
              //  prop1:1,
              //  prop2:2
              //}
              //objeto1.prop3=3;
            }
          );

          console.log("Usuarios: ", this.usuarios);
        },
        error => {
          console.log("Error: ", error)

        }
      );
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

  cargarPlanetas() {
    this._http
      .get("http://swapi.co/api/planets")
      //.map(response=>response.json())
      .subscribe(
        (response) => {
          console.log("Response", response)
          console.log(response.json())
          let respuesta = response.json();
          console.log(respuesta.next)
          this.planetas = respuesta.results;
          this.planetas = this.planetas.map(
            (planeta) => {
              planeta.imagenURL = "/assets/imagenes/" + planeta.name + ".jpg";
              return planeta;
            }
          );
        },
        (error) => {
          console.log("Error", error)
        },
        () => {
          console.log("Finaly")
        }
      )
  }

  crearUsuario() {
    let usuario: UsuarioClass = {
      nombre: this.nuevoUsuario.nombre
    }
    this._http.post("http://localhost:1337/usuario", usuario)
      .subscribe(
        respuesta => {

          console.log(respuesta);
          this.usuarios.push(respuesta.json());
          this.nuevoUsuario = {};

        },
        error => {
          console.log('Error', error);
        }
      );
  }
  /*
  eliminarUsuario(usuario: UsuarioClass, indice: number) {
    this._http.delete(`http://localhost:1337/Usuario/${usuario.id}`)
      .subscribe(
        respuesta => {
          console.log('Indice con index: ', usuario.id);
          let usuarioBorrado;
          usuarioBorrado = respuesta.json();
          this.usuarios = this.usuarios.filter(value => usuarioBorrado.id != value.id);


        },
        error => {
          console.log('Error', error);
        }
      );
  }

  modificarUsuario(usuario: UsuarioClass, nombre:string) {
    let cambio=  {
      nombre: usuario.nombre
    };

    this._http.put("http://localhost:1337/Usuario/"+usuario.id,cambio)
      .map((res)=>{

      return res.json();
      })
      //snippet -> template de codigo
      .subscribe(
        res=>{
          console.log("Se actualizao", res);
          let indice =this.usuarios.indexOf(usuario);
          this.usuarios[indice].nombre=nombre;
        },
        err=>{
          console.log("Error:",err )
        }
      );
  }
*/
  eliminarUsuario(usuario:UsuarioClass){

    let indice = this.usuarios.indexOf(usuario);

    this.usuarios.splice(indice,1);

  }

}


