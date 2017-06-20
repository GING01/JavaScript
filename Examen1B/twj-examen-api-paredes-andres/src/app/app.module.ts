import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from "@angular/http";
import { AppComponent } from './app.component';
import { MoviesComponent } from './movies/movies.component';
import { StudioGibliMoviesComponent } from './studio-gibli-movies/studio-gibli-movies.component';
import { DescriptionComponent } from './description/description.component';
import { DirectorComponent } from './director/director.component';
import { CriticaComponent } from './critica/critica.component';
import { ProductorComponent } from './productor/productor.component';
import { LanzamientoComponent } from './lanzamiento/lanzamiento.component';

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    StudioGibliMoviesComponent,
    DescriptionComponent,
    DirectorComponent,
    CriticaComponent,
    ProductorComponent,
    LanzamientoComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [MoviesComponent]
})
export class AppModule { }
