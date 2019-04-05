import { Component, OnInit } from '@angular/core';
import { NurseService } from 'src/app/shared/nurse.service';
import { Nurse } from 'src/app/shared/nurse.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-nurse-list',
  templateUrl: './nurse-list.component.html',
  styleUrls: ['./nurse-list.component.css']
})
export class NurseListComponent implements OnInit {

  constructor(private service : NurseService,
    private toastr : ToastrService) { }

  ngOnInit() {
    this.service.refreshList(); 
  }

  populateForm(nur : Nurse){
    this.service.formData = Object.assign({},nur); 
  }

  onDelete(id : number){
    if(confirm('Are you sure to Delete this Record?')){
    this.service.deleteNurse(id).subscribe(res =>{
      this.service.refreshList(); 
      this.toastr.warning('Delete Successfully', 'Nurse Register');
    });
  }
}

}
