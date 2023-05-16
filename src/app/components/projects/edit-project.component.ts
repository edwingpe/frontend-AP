import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyecto } from 'src/app/models/proyecto';
import { ProyectoService } from 'src/app/services/proyecto.service';

@Component({
  selector: 'app-edit-project',
  templateUrl: './edit-project.component.html',
  styleUrls: ['./edit-project.component.css']
})
export class EditProjectComponent {
  proyecto : Proyecto = null;

  constructor(
    private proyectoService: ProyectoService, 
    private activatedRouter: ActivatedRoute, 
    private router: Router) {}
  
  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.proyectoService.detalle(id).subscribe(
      data => {
        this.proyecto = data;
      },err => {
        alert('Error al modificar');
        this.router.navigate([''])
      }
    )
  }

  onUpdate(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.proyectoService.actualizar(id, this.proyecto).subscribe(
      data => {
        alert("Actualizacion exitosa")
        this.router.navigate(['/projects'])
      }, err => {
        alert("Actualizacion exitosa")
        this.router.navigate(['/projects'])
      }
    )


  }

}
