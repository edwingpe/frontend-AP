export class Persona {
    id?: any;
    firstname: string
    lastname: string
    description: string
    title: string
    imageURL: string
    imageURL2: string
    imageURL3: string
    imageURL4: string
    profileImageURL: string
    githubURL: string
    codepenURL: string
    linkedinURL: string


    constructor(id: string, firstname: string, lastname: string, description: string, title: string, imageURL: string, imageURL2: string, imageURL3: string, imageURL4:string, profileImageURL: string, githubURL: string, codepenURL: string, linkedinURL: string) {
        this.id = id;
        this.firstname = firstname;
        this.lastname = lastname;
        this.description = description;
        this.title = title;
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