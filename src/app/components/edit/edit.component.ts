import { Component, OnInit } from '@angular/core';
import { ProjectService } from 'src/app/services/project.service';
import { UploadService } from 'src/app/services/upload.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectModel } from 'src/app/models/project';
import * as $ from 'jquery';

@Component({
  selector: 'app-edit',
  templateUrl: '../create/create.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  public title:string;
  public project:ProjectModel;
  public status:string;
  public filesToUpload:Array<File>
  public url:string;
  public save_project:any;

  constructor(
    private _projectService:ProjectService,
    private _uploadService:UploadService,
    private _route:ActivatedRoute,
    private _router:Router
  ) {
    this.title="Editar Proyecto";
    this.url = "http://localhost:3000/api/";
  }

  ngOnInit() {

    this._route.params.subscribe(
      params =>{
        let id = params.id;
        this.getProject(id);
      }
    )

  }

  getProject(id){

    this._projectService.getProject(id).subscribe(
      response =>{
        this.project = response.project;
      },
      error =>{
        console.log(<any>error);
      }
    )
  }
  onSubmit(form:any){

    /* GUARDAR DATOS */
    if(this.project.name == "" || this.project.category == "" ||  this.project.description == "" ||this.project.langs == "" || this.project.year == "" ){
      this.status="failed"
    }
    else{
      this._projectService.updateProject(this.project).subscribe(
        response => {
            if(response.project){
              /* subir imagen */
              if(this.filesToUpload){
                this._uploadService.makeFilesRequest(this.url+"upload-image/"+response.project._id,[],this.filesToUpload,'image')
                .then((result:any)=>{

                    this.save_project = result.project;
                    this.status = "success";

                });
              }
              else{
                this.save_project = response.project;
                    this.status = "success";
              }

            }
            else{
              this.status = "failed";
            }
        },
        error => {
          console.log(<any>error);
        }
        );
    }

  }
  imagen(fileInput:any){
    this.filesToUpload = <Array<File>>fileInput.target.files;

  }

}
