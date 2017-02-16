import {Injectable} from '@angular/core';
import {Starcast} from './startcast';
import{baseService} from '../base/starwar.service';
import{common} from '../base/common';
import {Http, Headers, Response} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class StarcastService extends baseService{
    constructor(private http: Http){super();
    }
    
getStarCastsFromFilm(filmId:number):  Promise<Starcast[]>{
        return this.getStarCastIDs(filmId)
        .toPromise().then(m=>{return this.getCallBack(m)});
}

getCallBack(Ids:number[]): Starcast[]{
    let myArray:Observable<Starcast[]>;
    let myCastArray:Starcast[]=[];
    let runningNumber:number=0;
    let foo:boolean=true;
    for(let id of Ids){
        this.getStarCastFromId(id).toPromise().then(m=>
        {
            return myCastArray.push(m);
        });
    }
    return myCastArray;
}

getStarCastIDs(filmId:number):Observable<Array<number>>{
    let myNum:number[]=[];
    let myUrl:string=`${this.baseUrl}/films/${filmId}/`;
    return this.http
      .get(myUrl, {headers: this.getHeaders()})
      .map(this.getCharacterIds);
}

getCharacterIds(response: Response): number[]{
    let characterIds:number[]=[];
    let mychars:string[]=response.json().characters;
    for(let myChar of mychars){
        characterIds.push(common.extractIdFromString(myChar, 'people'));
    }
    return characterIds;
} 



getStarCastFromId(starcastID:number):Observable<Starcast>{
        let myStarCast:Starcast=null;
       return this.http
        .get(`${this.baseUrl}/people/${starcastID}/`, {headers: this.getHeaders()})
        .map(mapStarcast)
    }
}

function mapStarcast(response:Response):Starcast{
    return toStarcast(response.json());
}


function toStarcast(r:any):Starcast{
    return <Starcast>{
        birth_year:r.birth_year,
        eye_color:r.eye_color,
        gender:r.gender,
        hair_color:r.hair_color,
        height:r.height,
        homeworld:r.homeworld,
        mass:r.mass,
        name:r.name,
        skin_color:r.skin_color
    }
}

function handleError(error: Response | any){
    // In a real world app, we might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error('Error Message:'+errMsg);
    return Observable.throw(errMsg);
}