import { Component, OnInit } from '@angular/core';
import { NurseService } from 'src/app/shared/nurse.service';
import { NgForm } from '@angular/forms';
import { ToastrModule, ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-nurse',
  templateUrl: './nurse.component.html',
  styleUrls: ['./nurse.component.css']
})
export class NurseComponent implements OnInit {

  constructor(private service : NurseService,
    private toastr : ToastrService) { }

  ngOnInit() {
    this.resetForm(); 
  }

  resetForm(form? : NgForm){
    if(form != null )
    form.resetForm(); 
    this.service.formData = {
      NurseID : null,
      FUllName : '',
      Type : '',
      NurseCode : '',
      Mobile : ''
    }
  }


  onSubmit(form: NgForm){
    if(form.value.NurseID ==null)
    this.InsertRecord(form); 
    else
    this.updateRecord(form); 
  }

  InsertRecord(form: NgForm){
    this.service.postNurse(form.value).subscribe(res => {
      this.toastr.success('Inserted Successfully', 'Nurse Register'); 
      this.resetForm(form); 
      this.service.refreshList(); 
    });
  }

  updateRecord(form: NgForm){
    this.service.putNurse(form.value).subscribe(res => {
      this.toastr.info('Updated Successfully', 'Nurse Register'); 
      this.resetForm(form); 
      this.service.refreshList(); 
    }); 
  }
}
