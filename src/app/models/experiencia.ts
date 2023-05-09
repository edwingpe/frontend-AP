export class Experiencia {
    experienciaId?: number;
    nombreExperiencia : string;
    tituloExperiencia : string;
    descripcionExperiencia : string;
    fechaInicioExperiencia : string;
    fechaFinalExperiencia : string;
    imgExperienciaURL : string;

    constructor( nombreExperiencia : string, descripcionExperiencia : string, tituloExperiencia : string, fechaInicioExperiencia : string, fechaFinalExperiencia: string, imgExperienciaURL: string){

        this.nombreExperiencia = nombreExperiencia;
        this.tituloExperiencia = tituloExperiencia;
        this.descripcionExperiencia = descripcionExperiencia;
        this.fechaInicioExperiencia = fechaInicioExperiencia;
        this.fechaFinalExperiencia = fechaFinalExperiencia;
        this.imgExperienciaURL = imgExperienciaURL;
    }
}
