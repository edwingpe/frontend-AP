import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from '../models/Persona';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
 /*  URL = 'http://localhost:8080/api/personas'; */
  URL = 'https://backend-ap-p444.onrender.com/api/personas';
  


  constructor(private http: HttpClient) { }

 getData():Observable<any> {
    return this.http.get<any>(this.URL + '/traer')
  }


  //Create a new Persona
 /*  createPersona(persona: Persona){
    return this.http.post<Persona>(this.URL, persona, {
      observe: 'response'
    })
  } */

  
  //Get personas
  /* getPersonas(){
    return this.http.get<Persona[]>(this.URL)

  } */

  //Get persona (singular)
  public getPersona():Observable<Persona>{
    return this.http.get<Persona>(this.URL + '/' + '1')

  }
  

  //Actualizar persona
 /*  updatePersona(persona: Persona){
    return this.http.post<Persona>(this.URL, persona, {
      observe:'response'
    })

  } */


  //Eliminar persona
  /* deletePersona(id:number){
    this.http.post<Persona>(this.URL + '/' + id, {
      observe:'response'
    })
  } */
}
