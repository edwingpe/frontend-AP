import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proyecto } from '../models/proyecto';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {
  URL = 'https://backend-ap-p444.onrender.com/proyecto'

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Proyecto[]>{
    return this.httpClient.get<Proyecto[]>(this.URL + '/all');
  }

  public detalle(id: number): Observable<Proyecto>{
    return this.httpClient.get<Proyecto>(this.URL + `/detail/${id}`);
  }

  public guardar(proyecto: Proyecto): Observable<any>{
    return this.httpClient.post<any>(this.URL + '/new', proyecto)
  }

  public actualizar(id: number, proyecto: Proyecto):Observable<any>{
    return this.httpClient.put<any>(this.URL + `/update/${id}`,proyecto)
  }

  public eliminar(id:number):Observable<any>{
    return this.httpClient.delete(this.URL + `/delete/${id}`)
  }


}
