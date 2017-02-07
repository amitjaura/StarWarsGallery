import{Injectable} from '@angular/core';
import{film} from './film';
import{baseService} from '../base/starwar.service'
import{common} from '../base/common';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map'


@Injectable()
export class filmService extends baseService{

  constructor(private http: Http){super();}
    getFilms(): Observable<film[]>{
        let films$ = this.http
      .get(`${this.baseUrl}/films`, {headers: this.getHeaders()})
      .map(mapfilms);
      return films$;
}
}


function mapfilms(response:Response): film[]{
    var films= response.json().results.map(toFilms);
    return films;
}

function toFilms(r:any): film{
  let film = <film>({
    title:r.title,
	episode_id:r.episode_id,
	opening_crawl:r.opening_crawl,
    director:r.director,
	producer:r.producer,
	release_date: r.release_date,
    characters:r.characters,
    planets:r.planets,
    starships:r.starships,
    vehicles:r.vehicles,
    species:r.species,
    created:r.created,
	edited:r.edited,
	url:r.url
  });
  return film;
}




