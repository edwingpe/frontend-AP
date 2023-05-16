import { Component, OnInit } from '@angular/core';
import { Proyecto } from 'src/app/models/proyecto';
import { ProyectoService } from 'src/app/services/proyecto.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit{
  proyecto: Proyecto[] = [];

  constructor(private proyectoService: ProyectoService, private storageService: StorageService){}
  isLogged = false;

  ngOnInit(): void{
    this.cargarProyectos()
    if(this.storageService.isLoggedIn()){
      this.isLogged = true;
    } else{
      this.isLogged = false;
    }
  }

  cargarProyectos(): void {
    this.proyectoService.lista().subscribe(
      data => {
        this.proyecto = data;
      }
    )
  }

  delete(id?:number) {
    if(id != undefined){
      this.proyectoService.eliminar(id).subscribe(
        data => {
          this.cargarProyectos()
        }, err => {
          alert('No se pudo eliminar la habilidad')
        }
      )
    }
  }
}
