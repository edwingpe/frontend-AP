import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Habilidades } from 'src/app/models/habilidades';
import { HabilidadesService } from 'src/app/services/habilidades.service';

@Component({
  selector: 'app-edit-habilidad',
  templateUrl: './edit-habilidad.component.html',
  styleUrls: ['./edit-habilidad.component.css']
})
export class EditHabilidadComponent implements OnInit {
habilidad: Habilidades = null

  constructor(
    private habilidadesService: HabilidadesService,
    private activatedRouter: ActivatedRoute,
    private router: Router){ }
  

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id']
    this.habilidadesService.detalle(id).subscribe(
      data => {
        this.habilidad = data;
      }, err => {
        alert("Error al modificar")
        this.router.navigate([''])
      }
    )

  }

  onUpdate(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.habilidadesService.actualizar(id, this.habilidad).subscribe(
      data => {
        this.router.navigate(['']);
      }, err => {
        alert("Not updating")
        this.router.navigate([''])

      }
    )
  }
}
