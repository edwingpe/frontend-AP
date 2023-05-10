import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Educacion } from 'src/app/models/educacion';
import { EducacionService } from 'src/app/services/educacion.service';

@Component({
  selector: 'app-new-educacion',
  templateUrl: './new-educacion.component.html',
  styleUrls: ['./new-educacion.component.css']
})
export class NewEducacionComponent implements OnInit {
  nombreEducacion: string = '';
  descripcionEducacion: string = '';

  constructor(private educacionService: EducacionService, private router: Router){}

  ngOnInit(): void {
    
  }

  onCreate(): void {
    const educacion = new Educacion(this.nombreEducacion, this.descripcionEducacion);
    this.educacionService.guardar(educacion).subscribe(
      data => {
        alert("Creacion Exitosa")
      }, err =>{
        alert("Fallo") 
      })
  }
}
