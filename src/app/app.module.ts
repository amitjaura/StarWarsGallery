import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{HttpModule} from '@angular/http'


import { AppComponent }  from './app.component';
import {filmsComponent} from './StarWars/films/films.components';


@NgModule({
  imports:      [ BrowserModule, HttpModule ],
  declarations: [ AppComponent, filmsComponent ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
