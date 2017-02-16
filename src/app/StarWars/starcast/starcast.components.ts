import {Component, OnInit, OnDestroy} from '@angular/core';
import {ActivatedRoute} from '@angular/router'
import {Starcast} from './startcast';
import {StarcastService} from './starcast.service';
import {Observable} from 'rxjs/Rx';

@Component({
  templateUrl: `app/StarWars/starcast/starcast.view.html`,
  providers:[StarcastService]
})

export class starCastComponent implements OnInit, OnDestroy{
    starcasts:Starcast[];
    private sub: any;
    constructor(private route: ActivatedRoute, private starcastService:StarcastService ){
    }

    ngOnInit(){
      this.sub = this.route.params.subscribe(params => {
       this.starcastService
       .getStarCastsFromFilm(params['id'])
       .then(m=>{this.starcasts=m});
    });
  }

    ngOnDestroy(){
      this.sub.unsubscribe();
    }
}