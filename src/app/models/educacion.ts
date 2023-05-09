export class Educacion {
    educacionId: number;
    nombreEducacion: string;
    descripcionEducacion: string;

    constructor(nombreEducacion: string, descripcionEducacion: string) {
        this.nombreEducacion = nombreEducacion;
        this.descripcionEducacion = descripcionEducacion;
    }
}
