import { Component, EventEmitter, Input, OnInit, Output  } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { workers, workersInterface } from '../models/Workers'
import { AdminViewService } from '../../services/admin-view.service'
import { ViewAdminComponent } from '../view-admin/view-admin.component';

@Component({
  selector: 'app-edit-worker-modal',
  templateUrl: './edit-worker-modal.component.html',
  styleUrls: ['./edit-worker-modal.component.css']
})
export class EditWorkerModalComponent implements OnInit {

  public getResponse: any = {};

  public id:number = 0;

  public email: string = '';

  public password: string = '';

  public rol:string = '';

  @Output() closeModalEdit = new EventEmitter<void>();

  constructor(private adminService:AdminViewService, private viewAdminComponent:ViewAdminComponent) {}

  ngOnInit(): void {
     
  }

  getInfo(){
    this.viewAdminComponent.getWorkerResponse
    this.email = this.viewAdminComponent.getWorkerResponse.email
    this.id = this.viewAdminComponent.getWorkerResponse.id
    this.password = this.viewAdminComponent.getWorkerResponse.password
    this.rol = this.viewAdminComponent.getWorkerResponse.roles
  }

  patchWorker(id:any, email:any, password: any, rol:any){
    this.adminService.patchWorker(id, {id:id, email:email, password:password, roles:rol})
    .subscribe((res)=>{
      console.log(res);
      this.adminService.getWorkers().subscribe((res)=>{
        console.log(res);
        this.viewAdminComponent.workers = res
      })
    })
  }
  

  onCloseModalEdit(): void{
    this.closeModalEdit.emit();
  }
}
