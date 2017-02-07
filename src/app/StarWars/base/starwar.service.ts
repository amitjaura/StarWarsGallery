import{Injectable} from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map'

@Injectable()
export class baseService{
    protected baseUrl='http://swapi.co/api';

    protected getHeaders(){
    let headers = new Headers();
    headers.append('Accept', 'application/json');
    return headers;
  } 
}