import{Injectable} from '@angular/core';
import{StartWar} from './starwar';
import{baseService} from './base/starwar.service'
import{common} from './base/common';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map'


@Injectable()
export class StarwarsService extends baseService{

  constructor(private http: Http){super();}
    getStars(): Observable<StartWar[]>{
        let people$ = this.http
      .get(`${this.baseUrl}/people`, {headers: this.getHeaders()})
      .map(mapStarwars);
      return people$;
}
}


function mapStarwars(response:Response): StartWar[]{
   // The response of the API has a results
   // property with the actual results
   return response.json().results.map(toStarwar)
}

function toStarwar(r:any): StartWar{
  let person = <StartWar>({
    id: common.extractId(r, 'people'),
    url: r.url,
    name: r.name,
    weight: r.mass,
    height: r.height,
  });
  //console.log('Parsed person:', person);
  return person;
}




