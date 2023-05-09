import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Experiencia } from 'src/app/models/experiencia';
import { ExperienciaService } from 'src/app/services/experiencia.service';

@Component({
  selector: 'app-new-experiencia',
  templateUrl: './new-experiencia.component.html',
  styleUrls: ['./new-experiencia.component.css']
})
export class NewExperienciaComponent implements OnInit {
  nombreExperiencia: string = '';
  tituloExperiencia: string = '';
  descripcionExperiencia: string = '';
  fechaInicioExperiencia: string = '';
  fechaFinalExperiencia: string = '';
  imgExperienciaURL : string = '';

  constructor(private experienciaService: ExperienciaService, private router: Router){}

  ngOnInit(): void {

  }

  onCreate(): void {
    const expe = new Experiencia(this.nombreExperiencia, this.tituloExperiencia, this.descripcionExperiencia, this.fechaInicioExperiencia, this.fechaFinalExperiencia, this.imgExperienciaURL);
    this.experienciaService.guardar(expe).subscribe(data => {
      alert("Experiencia saved successfully");
      this.router.navigate(['experience']);
    }, err =>{
      alert("Error saving");
      this.router.navigate([''])
    })
  }
}
