import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './components/index/index.component';
import { IndexModalComponent } from './components/index/index-modal/index-modal.component';
import { AboutComponent } from './components/about/about.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ContactComponent } from './components/contact/contact.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { EditExperienciaComponent } from './components/experience/edit-experiencia/edit-experiencia/edit-experiencia.component';
import { NewExperienciaComponent } from './components/experience/new-experiencia/new-experiencia/new-experiencia.component';

const routes: Routes = [
  
  {path: 'index', component:IndexComponent},
  {path: 'index-modal', component: IndexModalComponent},
  {path: 'about', component:AboutComponent},
  {path: 'experience',component:ExperienceComponent},
  {path: 'nueva-experiencia', component: NewExperienciaComponent},
  {path: 'edit-expe/:id',component: EditExperienciaComponent},  
  {path: 'skills', component:SkillsComponent},
  {path: 'projects', component:ProjectsComponent},
  {path: 'contact', component:ContactComponent},
  {path: '', redirectTo: '/index', pathMatch: 'full' },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
