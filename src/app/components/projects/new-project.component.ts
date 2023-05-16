import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proyecto } from 'src/app/models/proyecto';
import { ProyectoService } from 'src/app/services/proyecto.service';

@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.css']
})
export class NewProjectComponent implements OnInit {
  nombre: string;
  url: string;
  imgUrl: string;

  constructor(private proyectoService: ProyectoService, private router: Router){}

  ngOnInit(): void {}

  onCreate(): void {
    const proyecto = new Proyecto(this.nombre, this.imgUrl, this.url);
    this.proyectoService.guardar(proyecto).subscribe(
      data => {
        alert("Proyecto agregado")
        this.router.navigate(['projects'])
      }, err => {
        alert('Proyecto Agregado')
        this.router.navigate(['projects'])
      }
    )  
  }

}
