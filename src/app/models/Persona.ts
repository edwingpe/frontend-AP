export class Persona {
    id?: number
    nombre: string
    apellido: string
    descripcion: string
    titulo: string
    imageURL: string
    imageURL2: string
    imageURL3: string
    imageURL4: string
    profileImageURL: string
    githubURL: string
    codepenURL: string
    linkedinURL: string


    constructor(nombre: string, apellido: string, descripcion: string, titulo: string, imageURL: string, imageURL2: string, imageURL3: string, imageURL4: string, profileImageURL: string, githubURL: string, codepenURL: string, linkedinURL: string) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.descripcion = descripcion;
        this.titulo = titulo;
        this.imageURL = imageURL;
        this.imageURL2 = imageURL2;
        this.imageURL3 = imageURL3;
        this.imageURL4 = imageURL4;
        this.profileImageURL = profileImageURL;
        this.githubURL = githubURL;
        this.codepenURL = codepenURL;
        this.linkedinURL = linkedinURL;
    }
}

