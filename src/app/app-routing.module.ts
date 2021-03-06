import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { CreateComponent } from './components/create/create.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { ErrorComponent } from './components/error/error.component';
import { DetailComponent } from './components/detail/detail.component';
import { EditComponent } from './components/edit/edit.component';

const routes: Routes = [
  {path:'',component:AboutComponent},
  {path:'sobre-mi',component:AboutComponent},
  {path:'proyectos',component:ProjectsComponent},
  {path:'crear-proyecto',component:CreateComponent},
  {path:'contacto',component:ContactsComponent},
  {path:'project/:id',component:DetailComponent},
  {path:'edit/:id',component:EditComponent},
  {path:'**',component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
