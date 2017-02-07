import {Component, OnInit} from '@angular/core';
import {film} from './film';
import {filmService} from './films.service';
import { Observable } from 'rxjs/Rx';

@Component({
    selector: 'my-films',
  templateUrl: `app/StarWars/films/films.view.html`,
  providers: [filmService]
})

export class filmsComponent extends OnInit{
    constructor(private myService:filmService){
        super();
    }

    films: film[]=[];
    getFilms():void{
        this.myService.getFilms().subscribe(f=>{this.films=f;});
    }

    ngOnInit(): void {
    this.getFilms();
  }
}