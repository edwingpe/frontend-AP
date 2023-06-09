import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Experiencia } from 'src/app/models/experiencia';
import { ExperienciaService } from 'src/app/services/experiencia.service';

@Component({
  selector: 'app-edit-experiencia',
  templateUrl: './edit-experiencia.component.html',
  styleUrls: ['./edit-experiencia.component.css']
})
export class EditExperienciaComponent implements OnInit{
  experiencia : Experiencia = null;

  constructor(
    private experienciaService: ExperienciaService, 
    private activatedRouter: ActivatedRoute, 
    private router: Router){}
  
  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.experienciaService.detalle(id).subscribe(
      data => {
        this.experiencia = data;
      }, err => {
        alert('Error, no se pudo actualizar')
        this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.experienciaService.actualizar(id,this.experiencia).subscribe(
      data => {
        alert('Actualizacion exitosa')
        this.router.navigate(['experience'])
      }, err => {
        alert('Error, no se pudo actualizar')
        this.router.navigate(['experience']);
      }
    )
  }



}
