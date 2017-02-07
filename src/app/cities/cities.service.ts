import{Injectable} from '@angular/core';
import{City} from '../city/city';
import{CITIES} from './cities.mock';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';


@Injectable()
export class CitiesService{
  constructor(private http: Http){}
    getCities(): City[]{
    return CITIES;
}

}




