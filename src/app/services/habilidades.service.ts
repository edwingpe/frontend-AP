import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Habilidades } from '../models/habilidades';

@Injectable({
  providedIn: 'root'
})
export class HabilidadesService {
  URL = 'http://localhost:8080/habilidades'
  /*URL = 'https://backend-ap-p444.onrender.com/habilidades/' */

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Habilidades[]>{
    return this.httpClient.get<Habilidades[]>(this.URL + '/lista');
  }

  public detalle(id: number): Observable<Habilidades>{
    return this.httpClient.get<Habilidades>(this.URL + `/detail/${id}`);
  }

  public guardar(habilidades: Habilidades): Observable<any>{
    return this.httpClient.post<any>(this.URL + '/create', habilidades)
  }

  public actualizar(id: number, habilidades: Habilidades):Observable<any>{
    return this.httpClient.put<any>(this.URL + `/update/${id}`,habilidades)
  }

  public eliminar(id:number):Observable<any>{
    return this.httpClient.delete(this.URL + `/delete/${id}`)
  }
}
