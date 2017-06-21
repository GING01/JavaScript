import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import {HttpModule} from "@angular/http";
import { EstiloComponent } from './estilo/estilo.component';
import { InicioComponent } from './Components/inicio/inicio.component';
import { Prueba1Component } from './Components/prueba1/prueba1.component';
import { PlanetaStarWarsComponent } from './Components/planeta-star-wars/planeta-star-wars.component';
import { PeriodoOrbitalComponent } from './Components/periodo-orbital/periodo-orbital.component';
import { DiametroComponent } from './Components/diametro/diametro.component';
import { ClimaComponent } from './Components/clima/clima.component';
import { GravedadComponent } from './Components/gravedad/gravedad.component';
import { TerrenoComponent } from './Components/terreno/terreno.component';
import { UsuarioComponent } from './Components/usuario/usuario.component';
import { Pagina2Component } from './Components/pagina2/pagina2.component';
import {ModuloDeRutas} from "./routes";
import { Pagina21Component } from './Components/pagina21/pagina21.component';
import { Pagina22Component } from './Components/pagina22/pagina22.component';
import { Pagina23Component } from './Components/pagina23/pagina23.component';

@NgModule({
  declarations: [
    AppComponent,
    EstiloComponent,
    InicioComponent,
    Prueba1Component,
    PlanetaStarWarsComponent,
    PeriodoOrbitalComponent,
    DiametroComponent,
    ClimaComponent,
    GravedadComponent,
    TerrenoComponent,
    UsuarioComponent,
    Pagina2Component,
    Pagina21Component,
    Pagina22Component,
    Pagina23Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ModuloDeRutas
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
