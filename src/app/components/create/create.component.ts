import { Component, OnInit } from '@angular/core';
import { ProjectModel } from "../../models/project";
import { ProjectService } from "../../services/project.service";
import { UploadService } from "../../services/upload.service";
import * as $ from 'jquery';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
  providers:[ProjectService,UploadService]
})
export class CreateComponent implements OnInit {

  public title:string;
  public project:ProjectModel;
  public status:string;
  public filesToUpload:Array<File>
  public url:string;
  public save_project:any;
  public imageValid:string;

  constructor(
    private _projectService:ProjectService,
    private _uploadService:UploadService)
    {
    this.url = "http://localhost:3000/api/"
    this.title = "Crear proyecto";
    this.project= new ProjectModel("","","","","","","");
   }

  ngOnInit() {

    

  }
  onSubmit(form:any){

    /* GUARDAR DATOS */
    if(this.project.name == "" || this.project.category == ""
    ||  this.project.description == "" ||this.project.langs == ""
    || this.project.year == "" ){

      this.status="failed"

    }
    else{

      this._projectService.saveProject(this.project).subscribe(
        response => {

            if(response.project){
              /* subir imagen */
              if(this.filesToUpload){
                this._uploadService.makeFilesRequest(this.url+"upload-image/"+response.project._id,[],this.filesToUpload,'image')
                .then((result:any)=>{
                    console.log(result);
                    this.save_project = result.project;
                    this.status = "success";
                    form.reset();
                });
              }
              else{
                this.save_project = response.project;
                this.status = "success";
                form.reset();
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
