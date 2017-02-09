import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{HttpModule} from '@angular/http';
import {RouterModule, Routes} from '@angular/router'

import {AppRoutingModule} from './app-routing.module'
import { AppComponent }  from './app.component';
import {filmsComponent} from './StarWars/films/films.components';
import{starCastComponent} from './StarWars/starcast/starcast.components';


@NgModule({
  imports:      [ BrowserModule, HttpModule, AppRoutingModule],
  declarations: [ AppComponent, filmsComponent, starCastComponent ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
