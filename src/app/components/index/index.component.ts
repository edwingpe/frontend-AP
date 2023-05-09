import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/models/Persona';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  persona: Persona = new Persona("","","","","","","","","","","","","");
  data: any[] = [];
  

  constructor(public personaService: PersonaService){}

  ngOnInit():void{
    this.getData();
    this.getPersona();
    
  }

  getData(){
    this.personaService.getData().subscribe( data => {
      this.data = data;
      console.log(this.data);
    })
  }

  getPersona(){
    this.personaService.getPersona().subscribe( data => {
      this.persona = data;
      console.log(this.persona);
    })
  }

}
