import { Component, OnInit } from '@angular/core';
import { ProjectService } from "../../services/project.service";
import { ProjectModel } from "../../models/project";
import { Router,Params,ActivatedRoute } from "@angular/router";
import * as $ from 'jquery';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
  providers:[ProjectService]
})
export class DetailComponent implements OnInit {

  public url:string;
  public project:ProjectModel;
  public confirm:boolean;

  constructor(
    private _serviceProject:ProjectService,
    private _route:ActivatedRoute,
    private _router:Router)
  {
    this.url = "http://localhost:3000/api/";
    this.confirm=false;
  }

  ngOnInit() {
    
    this._route.params.subscribe(
      params =>{
        let id = params.id;
        this.getProject(id);
      }
    )

  }
  setConfirm(confirm:boolean){
    this.confirm = confirm;
  }

  getProject(id){
    this._serviceProject.getProject(id).subscribe(
      response =>{
        this.project = response.project;
      },
      error =>{
        console.log(<any>error);
      }
    )
  }

  deleteProject(id){
    this._serviceProject.deleteProject(id).subscribe(
      response =>{
        if(response.project){
          this._router.navigate(['/proyectos']);
        }
      },
      error =>{
        console.log(<any>error)
      }
    )
  }
}
