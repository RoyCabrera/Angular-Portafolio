import { Component, OnInit } from '@angular/core';
import { ProjectService } from "../../services/project.service";
import { ProjectModel } from 'src/app/models/project';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  public projects:ProjectModel[];
  public projecModel:Array<ProjectModel>;
  public listado:any;
  public url:string;

  constructor(private _projectService:ProjectService) {

    this.url = "http://localhost:3000/api/";
   }

  ngOnInit() {
    this.getProjects();
  }

  getProjects(){
    this._projectService.getProjects().subscribe(
      response =>{
        if(response.projects){
          this.projects= response.projects;
        }
        console.log(response);
      },
      error =>{
        console.log(<any>error);
      }
    );
  }

}
