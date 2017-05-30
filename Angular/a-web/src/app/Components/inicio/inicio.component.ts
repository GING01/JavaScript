import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  nombre: string = "Andres";
  arreglousuarios = [{

    nombre: "andres",
    apellido: "paredes",
    conectado:true
  }, {
    nombre: "David",
    apellido: "Ruano"
  }, {
    nombre: "GIng",
    apellido: "Freacks"
  }]

  constructor() {

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

}
