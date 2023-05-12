import { Component, OnInit } from '@angular/core';
import { Experiencia } from 'src/app/models/experiencia';
import { ExperienciaService } from 'src/app/services/experiencia.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit{
  experiencia: Experiencia[] = [];
  
  //Validacion de sesion activa.
  isLogged = false;
  
  constructor(private experienciaService: ExperienciaService, private storageService: StorageService){ }


  ngOnInit(): void {
    this.cargarExperiencia();
    if(this.storageService.isLoggedIn()){
      this.isLogged = true;
    } else{
      this.isLogged = false;
    }
  }

  cargarExperiencia():void {
    this.experienciaService.lista().subscribe( data =>{
      this.experiencia = data;
    })
  }

  delete(id?:number){
    if(id != undefined){
      this.experienciaService.eliminar(id).subscribe(
        data => {
          this.cargarExperiencia();
          alert("Borrado Exitoso")
        },err =>{
          alert('No se pudo');
        }
      )
    }
  }
}
