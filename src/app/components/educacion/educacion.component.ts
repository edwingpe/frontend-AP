import { Component, OnInit } from '@angular/core';
import { Educacion } from 'src/app/models/educacion';
import { EducacionService } from 'src/app/services/educacion.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
  educacion: Educacion[] = [];

  constructor(private educacionService: EducacionService, private storageService: StorageService){ }
  isLogged = false;
  
  ngOnInit(): void {
    this.cargarEducacion();
    if (this.storageService.isLoggedIn()){
      this.isLogged = true;      
    } else {
      this.isLogged = false;
    }
  }

  cargarEducacion(): void {
    this.educacionService.lista().subscribe( data =>{
        this.educacion = data;
      }
    )
  }

  borrar(id?: number){
    if( id !=undefined){
      this.educacionService.eliminar(id).subscribe(
        data => {
          this.cargarEducacion();
        },err => {
            alert("Imposible Eliminar")
        }
      )
    }
  }
}
