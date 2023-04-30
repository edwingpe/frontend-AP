import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { IndexComponent } from './components/index/index.component';
import { AboutComponent } from './components/about/about.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ContactComponent } from './components/contact/contact.component';
import { ExperienceComponent } from './components/experience/experience.component';

const routes: Routes = [
  {path: '', redirectTo: '/index', pathMatch: 'full' },
  {path: 'app-root', component:AppComponent},
  {path: 'index', component:IndexComponent},
  {path: 'about', component:AboutComponent},
  {path: 'experience',component:ExperienceComponent},  
  {path: 'skills', component:SkillsComponent},
  {path: 'projects', component:ProjectsComponent},
  {path: 'contact', component:ContactComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
