import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Educacion } from 'src/app/models/educacion';
import { EducacionService } from 'src/app/services/educacion.service';

@Component({
  selector: 'app-edit-educacion',
  templateUrl: './edit-educacion.component.html',
  styleUrls: ['./edit-educacion.component.css']
})
export class EditEducacionComponent implements OnInit {
  educacion : Educacion = null;

  constructor(
    private educacionService: EducacionService, 
    private activatedRouter: ActivatedRoute, 
    private router: Router) {}
  
  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.educacionService.detalle(id).subscribe(
      data => {
        this.educacion = data;
      },err => {
        alert('Error al modificar');
        this.router.navigate([''])
      }
    )
  }

  onUpdate(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.educacionService.actualizar(id, this.educacion).subscribe(
      data => {
        alert("Actualizacion exitosa")
      }, err => {
        alert("Error al actualizar")
        this.router.navigate([''])
      }
    )


  }

}
