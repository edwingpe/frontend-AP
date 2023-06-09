import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Habilidades } from 'src/app/models/habilidades';
import { HabilidadesService } from 'src/app/services/habilidades.service';

@Component({
  selector: 'app-nueva-habilidad',
  templateUrl: './nueva-habilidad.component.html',
  styleUrls: ['./nueva-habilidad.component.css']
})
export class NuevaHabilidadComponent implements OnInit{
  nombre: string;
  porcentaje: number;

  constructor(private habilidadesService: HabilidadesService, private router: Router){}
  
  ngOnInit(): void {
    
  }

  onCreate(): void {
    const habilidad = new Habilidades(this.nombre, this.porcentaje);
    this.habilidadesService.guardar(habilidad).subscribe(
      data => {
        alert("Error")
        this.router.navigate(['habilidades'])
      }, err => {
        alert('Habilidad agregada')
        this.router.navigate(['habilidades'])
      }
    )
  }

  
}
