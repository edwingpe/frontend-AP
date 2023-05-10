import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/models/persona';
import { PersonaService } from 'src/app/services/persona.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  persona: Persona =  null
 
  

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
      this.persona = data;
    })
  }

}
