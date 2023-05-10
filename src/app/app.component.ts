import { Component } from '@angular/core';
import { Persona } from './models/persona';
import { PersonaService } from './services/persona.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend-AP';

  persona: Persona = new Persona("","","","","","","","","","","","");
  data: any[] = [];
  

  constructor(public personaService: PersonaService){}

  /* ngOnInit():void{
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
    }) */
  
}
