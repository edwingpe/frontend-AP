import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Experiencia } from '../models/experiencia';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {
  experienciaURL = 'http://localhost8080/experiencia'

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Experiencia[]>{
    return this.httpClient.get<Experiencia[]>(this.experienciaURL + '/lista');
  }

  public detalle(id: number): Observable<Experiencia>{
    return this.httpClient.get<Experiencia>(this.experienciaURL + `/detail/${id}`)
  }

  public guardar(experiencia: Experiencia): Observable<any> {
    return this.httpClient.post<any>(this.experienciaURL + '/create', experiencia)
  }

  public actualizar(id: number, experiencia: Experiencia): Observable<any> {
    return this.httpClient.put<any>(this.experienciaURL + `/update/${id}`,experiencia)
  }

  public eliminar(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.experienciaURL + `/delete${id}/`)
  }
}
