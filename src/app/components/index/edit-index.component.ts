import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-edit-index',
  templateUrl: './edit-index.component.html',
  styleUrls: ['./edit-index.component.css']
})
export class EditIndexComponent implements OnInit {
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

