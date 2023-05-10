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
import { ContactComponent } from './components/contact/contact.component';
import { IndexModalComponent } from './components/index/index-modal/index-modal.component';
import { LoginComponent } from './components/login/login.component';
import { AboutModalComponent } from './components/about/about-modal/about-modal.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { EditExperienciaComponent } from './components/experience/edit-experiencia/edit-experiencia/edit-experiencia.component';
import { NewExperienciaComponent } from './components/experience/new-experiencia/new-experiencia/new-experiencia.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { EditEducacionComponent } from './components/educacion/edit-educacion/edit-educacion.component';
import { NewEducacionComponent } from './components/educacion/new-educacion/new-educacion.component';
import { HabilidadesComponent } from './components/habilidades/habilidades.component';
import { NuevaHabilidadComponent } from './components/habilidades/nueva-habilidad/nueva-habilidad.component';
import { EditHabilidadComponent } from './components/habilidades/edit-habilidad/edit-habilidad.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    IndexComponent,
    FooterComponent,
    AboutComponent,
    ProjectsComponent,
    ContactComponent,
    IndexModalComponent,
    LoginComponent,
    AboutModalComponent,
    ExperienceComponent,
    EditExperienciaComponent,
    NewExperienciaComponent,
    EducacionComponent,
    EditEducacionComponent,
    NewEducacionComponent,
    HabilidadesComponent,
    NuevaHabilidadComponent,
    EditHabilidadComponent,
    
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
