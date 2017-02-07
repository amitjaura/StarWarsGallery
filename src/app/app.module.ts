import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{HttpModule} from '@angular/http'


import { AppComponent }  from './app.component';
import {StartWarsComponent} from './StarWars/starwars.component';
import {filmsComponent} from './StarWars/films/films.components';


@NgModule({
  imports:      [ BrowserModule, HttpModule ],
  declarations: [ AppComponent, StartWarsComponent, filmsComponent ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
