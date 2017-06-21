import {RouterModule, Routes} from "@angular/router";
import {InicioComponent} from "./Components/inicio/inicio.component";
import {Pagina2Component} from "./Components/pagina2/pagina2.component";
import {ModuleWithProviders} from "@angular/core";
import {Pagina21Component} from "./Components/pagina21/pagina21.component";
import {Pagina22Component} from "./Components/pagina22/pagina22.component";
import {Pagina23Component} from "./Components/pagina23/pagina23.component";
/**
 * Created by and_a on 21/06/2017.
 */

export const routes: Routes = [
  {
    path:"inicio",
    component:InicioComponent
  },
  {
    path:"pagina2/:idPagina2/pagina3/:idPagina3",
    component:Pagina2Component,
    children:[
      {
        path:"pagina21/:idPartes",
        component:Pagina21Component
      },
      {
        path:"pagina22/:idCompetencias",
        component:Pagina22Component
      },
      {
        path:"pagina23/:idDuenos",
        component:Pagina23Component
      }
    ]
  }
];

export const ModuloDeRutas: ModuleWithProviders =
  RouterModule.forRoot(routes);
