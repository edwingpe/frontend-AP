import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './components/index/index.component';
import { AboutComponent } from './components/about/about.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { EditExperienciaComponent } from './components/experience/edit-experiencia/edit-experiencia/edit-experiencia.component';
import { NewExperienciaComponent } from './components/experience/new-experiencia/new-experiencia/new-experiencia.component';
import { NewEducacionComponent } from './components/educacion/new-educacion/new-educacion.component';
import { EditEducacionComponent } from './components/educacion/edit-educacion/edit-educacion.component';
import { HabilidadesComponent } from './components/habilidades/habilidades.component';
import { NuevaHabilidadComponent } from './components/habilidades/nueva-habilidad/nueva-habilidad.component';
import { EditHabilidadComponent } from './components/habilidades/edit-habilidad/edit-habilidad.component';
import { EditIndexComponent } from './components/index/edit-index.component';
import { EditAboutComponent } from './components/about/edit-about.component';
import { NewProjectComponent } from './components/projects/new-project.component';
import { EditProjectComponent } from './components/projects/edit-project.component';

const routes: Routes = [
  
  {path: '', redirectTo: '/index', pathMatch: 'full' },
  {path: 'index', component:IndexComponent},
  {path: 'edit-index/:id', component: EditIndexComponent},
  {path: 'about', component:AboutComponent},
  {path: 'edit-about/:id', component: EditAboutComponent},
  {path: 'experience',component:ExperienceComponent},
  {path: 'nueva-experiencia', component: NewExperienciaComponent},
  {path: 'edit-expe/:id',component: EditExperienciaComponent},
  {path: 'nueva-educacion', component: NewEducacionComponent},
  {path: 'edit-educacion/:id', component: EditEducacionComponent},
  {path: 'habilidades', component:HabilidadesComponent},
  {path: 'nueva-habilidad', component: NuevaHabilidadComponent},
  {path: 'edit-habilidad/:id', component:EditHabilidadComponent},
  {path: 'projects', component:ProjectsComponent},
  {path: 'new-project', component:NewProjectComponent},
  {path: 'edit-project/:id', component: EditProjectComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
