import {Component, OnInit } from '@angular/core';
import {StarwarsService} from './starwar.service'
import{StartWar} from './starwar';
import { Observable } from 'rxjs/Rx';
import {filmService} from './films/films.service';



@Component({
    selector: 'my-stars',
  templateUrl: `app/StarWars/starwars.view.html`,
  providers: [StarwarsService, filmService]
})

export class StartWarsComponent extends OnInit{
 constructor(private starwarService: StarwarsService,
 private myFilmService: filmService){
     super();
 }
 
 starwars:StartWar[]=[];
 getStarwars(): void {
    this.starwarService.getStars().subscribe(p => this.starwars = p);
  }

 ngOnInit(): void {
    this.getStarwars();
  }
};
