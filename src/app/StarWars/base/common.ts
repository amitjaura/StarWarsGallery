import {Response} from '@angular/http';
import {Observable} from 'rxjs/Rx';

export class common{
static extractId(data:any, actor:string){
    let extractedId = data.url.replace('http://swapi.co/api/'+actor+'/','').replace('/','');
    return parseInt(extractedId);
}

static extractIdFromString(str:string, actor:string){
    let extractedId = str.replace('http://swapi.co/api/'+actor+'/','').replace('/','');
    return parseInt(extractedId);
}

static handleError(error: Response | any){
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
}