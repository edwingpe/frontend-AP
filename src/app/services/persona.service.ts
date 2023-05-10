import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from '../models/persona';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  URL = 'http://localhost:8080/api/personas';
  /* URL = 'https://backend-ap-p444.onrender.com/api/personas'; */


  constructor(private http: HttpClient) { }

  public lista(): Observable<Persona[]>{
    return this.http.get<Persona[]>(this.URL + '/lista')
  }

  public detalle(id:number): Observable<Persona>{
    return this.http.get<Persona>(this.URL + `/detail/${id}`)
  }

  public actualizar(id:number, persona: Persona): Observable<any>{
    return this.http.put<any>(this.URL + `/update/${id}`,persona)
  } 
}
