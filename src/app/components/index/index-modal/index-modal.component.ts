import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Persona } from 'src/app/models/Persona';
import { PersonaService } from 'src/app/services/persona.service';


@Component({
  selector: 'app-index-modal',
  templateUrl: './index-modal.component.html',
  styleUrls: ['./index-modal.component.css']
})
export class IndexModalComponent implements OnInit {
  form: FormGroup;
  
  
  constructor (private formBuilder: FormBuilder,
    private personaService: PersonaService,
    private activatedRoute: ActivatedRoute,
    private router: Router
    ) {

      this.form = this.formBuilder.group({
       id:[''],
       nombre:[''],
       apellido: [''],
       descripcion: [''],
       titulo: [''],
       imageURL: [''],
       imageURL2: [''],
       imageURL3: [''],
       imageURL4: [''],
       profileImageURL: [''],
       githubURL: [''],
       codepenURL: [''],
       linkedinURL: ['']
      })
      
    }

    ngOnInit(): void {
      
    }

}
