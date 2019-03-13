import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from "@angular/common/http";
import { ProjectModel } from "../models/project";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  public url:string;
  public sunat:string;

  constructor(private _http:HttpClient) {

    this.url = "http://localhost:3000/api/";
    
   }

   testService(){
     return "Probando el servicio de Angular";
   }
}
