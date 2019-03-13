import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { CreateComponent } from './components/create/create.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { ErrorComponent } from './components/error/error.component';
import { DetailComponent} from './components/detail/detail.component';
import { EditComponent } from './components/edit/edit.component';
import { ResaltadoDirective } from './directives/resaltado.directive';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ProjectsComponent,
    CreateComponent,
    ContactsComponent,
    DetailComponent,
    ErrorComponent,
    EditComponent,
    ResaltadoDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
