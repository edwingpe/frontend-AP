import { Component, OnInit } from '@angular/core';
import { Habilidades } from 'src/app/models/habilidades';
import { HabilidadesService } from 'src/app/services/habilidades.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})
export class HabilidadesComponent implements OnInit{
  habilidad: Habilidades[] = [];
  
  constructor(private habilidadesService: HabilidadesService, private storageService: StorageService){}
  isLogged = false;

  ngOnInit(): void {
    this.cargarHabilidades()
    if(this.storageService.isLoggedIn()){
      this.isLogged = true;
    } else{
      this.isLogged = false;
    }
    
  }

  cargarHabilidades(): void {
    this.habilidadesService.lista().subscribe(
      data => {
        this.habilidad = data;
      }
    )
  }

  delete(id?:number) {
    if(id != undefined){
      this.habilidadesService.eliminar(id).subscribe(
        data => {
          this.cargarHabilidades()
        }, err => {
          alert('No se pudo eliminar la habilidad')
        }
      )
    }
  }
}
