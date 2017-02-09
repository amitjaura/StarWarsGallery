import {Component, OnInit, OnDestroy} from '@angular/core';
import {ActivatedRoute} from '@angular/router'
import {Starcast} from './startcast';

@Component({
  templateUrl: `app/StarWars/starcast/starcast.view.html`
})

export class starCastComponent implements OnInit, OnDestroy{
    starcast:Starcast;
    private sub: any;
    constructor(private route: ActivatedRoute ){
    }
    ngOnInit(){
      this.sub = this.route.params.subscribe(params => {
        console.log(params['id']);
      this.starcast=<Starcast>({id:+params['id']});
    });
  }

    ngOnDestroy(){
      this.sub.unsubscribe();
    }
}