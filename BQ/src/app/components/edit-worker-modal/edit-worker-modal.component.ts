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

  public getResponse: any = {}

  editWorkerForm!: FormGroup;
  editworker: workers = {
    id: '',
    email: '',
    password: '',
    roles: '',
  };

  get idControl(): FormControl {
    return this.editWorkerForm.get('id') as FormControl
  }

  get emailControl(): FormControl {
    return this.editWorkerForm.get('email') as FormControl
  }

  get passwordControl(): FormControl {
    return this.editWorkerForm.get('password') as FormControl
  }

  get rolControl(): FormControl {
    return this.editWorkerForm.get('rol') as FormControl
  }
  @Input() WorkersInterface!: workersInterface;
  @Output() closeModalEdit = new EventEmitter<void>();

  constructor(private adminService:AdminViewService, private viewAdminComponent:ViewAdminComponent) {}

  ngOnInit(): void {
    this.editWorkerForm = new FormGroup({
      id: new FormControl(''),
      email: new FormControl('', Validators.email),
      password: new FormControl(''),
      rol: new FormControl(''),
    })
    this.editworker = {
      id: this.editWorkerForm.value['id'],
      email: this.editWorkerForm.value['email'],
      password: this.editWorkerForm.value['password'],
      roles: this.editWorkerForm.value['rol']
    }

    // console.log(this.viewAdminComponent.getWorkerResponse);
    
   this.viewAdminComponent.getWorkerResponse
  }

  public email: string = '';

  patch(){
    this.viewAdminComponent.getWorkerResponse
    this.email = this.viewAdminComponent.getWorkerResponse.email
    console.log(this.viewAdminComponent.getWorkerResponse);
  }


  

  onCloseModalEdit(): void{
    this.closeModalEdit.emit();
  }
}
