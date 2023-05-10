import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Persona } from 'src/app/models/persona';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-edit-about',
  templateUrl: './edit-about.component.html',
  styleUrls: ['./edit-about.component.css']
})
export class EditAboutComponent implements OnInit {
  persona: Persona =  new Persona("","","","","","","","","","","","");
  
  constructor(
    private personaService: PersonaService, 
    private activatedRouter: ActivatedRoute, 
    private router: Router) {}
  
  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.personaService.detalle(id).subscribe(
      data => {
        this.persona = data;
      },err => {
        alert('Error al modificar');
        this.router.navigate([''])
      }
    )
  }

  onUpdate(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.personaService.actualizar(id, this.persona).subscribe(
      data => {
        this.router.navigate(['about'])
      }, err => {
        alert('Actualizado')
        this.router.navigate(['about']);
      }
    )
  }
}
