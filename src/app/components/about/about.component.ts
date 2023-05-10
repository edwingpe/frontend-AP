import { Component } from '@angular/core';
import { Persona } from 'src/app/models/persona';
import { PersonaService } from 'src/app/services/persona.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  persona: Persona =  new Persona("","","","","","","","","","","","");

  
  constructor(public personaService: PersonaService, 
    private storageService: StorageService){ }

  isLogged = false
  ngOnInit():void{
    this.cargarPersona();
    if(this.storageService.isLoggedIn()){
      this.isLogged = true;
    } else{
      this.isLogged = false;
    }
    
  }

  cargarPersona(){
    this.personaService.detalle(1).subscribe(data =>{
      this.persona = data
    })
  }
}
