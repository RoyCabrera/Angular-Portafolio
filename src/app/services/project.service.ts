import { Injectable } from '@angular/core';
import {  ProjectModel} from "../models/project";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  public url:string;

  constructor(private _http:HttpClient) {

    this.url = "http://localhost:3000/api/";

   }

   saveProject(project:ProjectModel):Observable<any>{

    let params = JSON.stringify(project);
    let headers = new HttpHeaders().set("Content-Type","application/json");

    return this._http.post(this.url+"save",params,{headers:headers});

   }
   getProjects():Observable<any>{

    let headers = new HttpHeaders().set("Content-Type","application/json");

    return this._http.get(this.url+"projects",{headers:headers});
   }

   getProject(id:any):Observable<any>{
      let headers = new HttpHeaders().set('Content-Type','application/json');

      return this._http.get(this.url+'project/'+id,{headers:headers});

   }
   deleteProject(id:any):Observable<any>{
     let headers = new HttpHeaders().set('Content-Type','application/json');

     return this._http.delete(this.url+'delete/'+id,{headers:headers});
   }
   updateProject(project:any):Observable<any>{
     let params = JSON.stringify(project);
     let headers = new HttpHeaders().set('Content-Type','application/json');

     return this._http.put(this.url+'update/'+project._id,params,{headers:headers});
   }
}
