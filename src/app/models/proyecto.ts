export class Proyecto {
    id : number;
    nombre : string;
    url : string;
    imgUrl : string;

    constructor(nombre : string, url : string, imgUrl : string){
        this.nombre = nombre;
        this.url = url;
        this.imgUrl = imgUrl;
    }
}
