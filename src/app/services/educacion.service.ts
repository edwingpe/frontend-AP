import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Educacion } from '../models/educacion';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {
  /* URL = 'http://localhost:8080/educacion'; */
  
  URL = 'https://backend-ap-p444.onrender.com/educacion';

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Educacion[]>{
    return this.httpClient.get<Educacion[]>(this.URL + "/lista")
  }

  public detalle(id:number):Observable<Educacion>{
    return this.httpClient.get<Educacion>(this.URL + `/detail/${id}`);
  }

  public guardar(educacion: Educacion): Observable<any>{
    return this.httpClient.post<any>(this.URL + "/create",educacion);
  }

  public actualizar(id: number, educacion: Educacion): Observable<any>{
    return this.httpClient.put<any>(this.URL + `/update/${id}`, educacion);
  }

  public eliminar(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.URL + `/delete/${id}`);
  }
}
