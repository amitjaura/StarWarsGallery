export class common{
static extractId(data:any, actor:string){
    let extractedId = data.url.replace('http://swapi.co/api/'+actor+'/','').replace('/','');
    return parseInt(extractedId);
}
}