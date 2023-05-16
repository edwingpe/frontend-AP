import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { IndexComponent } from './components/index/index.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutComponent } from './components/about/about.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { LoginComponent } from './components/login/login.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { EditExperienciaComponent } from './components/experience/edit-experiencia/edit-experiencia/edit-experiencia.component';
import { NewExperienciaComponent } from './components/experience/new-experiencia/new-experiencia/new-experiencia.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { EditEducacionComponent } from './components/educacion/edit-educacion/edit-educacion.component';
import { NewEducacionComponent } from './components/educacion/new-educacion/new-educacion.component';
import { HabilidadesComponent } from './components/habilidades/habilidades.component';
import { NuevaHabilidadComponent } from './components/habilidades/nueva-habilidad/nueva-habilidad.component';
import { EditHabilidadComponent } from './components/habilidades/edit-habilidad/edit-habilidad.component';
import { EditIndexComponent } from './components/index/edit-index.component';
import { EditAboutComponent } from './components/about/edit-about.component';
import { EditProjectComponent } from './components/projects/edit-project.component';
import { NewProjectComponent } from './components/projects/new-project.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    IndexComponent,
    FooterComponent,
    AboutComponent,
    ProjectsComponent,
    LoginComponent,
    ExperienceComponent,
    EditExperienciaComponent,
    NewExperienciaComponent,
    EducacionComponent,
    EditEducacionComponent,
    NewEducacionComponent,
    HabilidadesComponent,
    NuevaHabilidadComponent,
    EditHabilidadComponent,
    EditIndexComponent,
    EditAboutComponent,
    EditProjectComponent,
    NewProjectComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
