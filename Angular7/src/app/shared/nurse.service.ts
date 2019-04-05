import { Injectable } from '@angular/core';
import { Nurse } from './nurse.model';
import {HttpClient } from "@angular/common/http"; 

@Injectable({
  providedIn: 'root'
})
export class NurseService {

  formData : Nurse; 
  list : Nurse[]; 
  readonly rootURL = "http://localhost:1040/api"; 

  constructor(private http : HttpClient) { }

  postNurse(formData : Nurse){
    return this.http.post(this.rootURL+'/Nurse',formData); 
  }

  refreshList(){
    this.http.get(this.rootURL+'/Nurse')
    .toPromise().then(res => this.list = res as Nurse[]); 
  }

  putNurse(formData : Nurse){
    return this.http.put(this.rootURL+'/Nurse/'+formData.NurseID,formData); 
  }

  deleteNurse(id : number){
    return this.http.delete(this.rootURL+'/Nurse/'+id);
  }
}
