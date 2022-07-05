import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { workersInterface } from '../models/Workers'
import { AdminViewService } from '../../services/admin-view.service'
import { ViewAdminComponent } from '../../components/view-admin/view-admin.component'
@Component({
  selector: 'app-add-worker-modal',
  templateUrl: './add-worker-modal.component.html',
  styleUrls: ['./add-worker-modal.component.css']
})
export class AddWorkerModalComponent implements OnInit {

  addWorkerForm!: FormGroup;
  addWorker: workersInterface = {
    email: '',
    password: '',
    roles: '',
  };

  get emailControl(): FormControl {
    return this.addWorkerForm.get('email') as FormControl
  }

  get passwordControl(): FormControl {
    return this.addWorkerForm.get('password') as FormControl
  }

  get rolControl(): FormControl {
    return this.addWorkerForm.get('rol') as FormControl
  }
  
  @Output() closeModal = new EventEmitter<void>();

  constructor(private adminService: AdminViewService, private viewAdminComponent :ViewAdminComponent) { }

  ngOnInit(): void {
    this.addWorkerForm = new FormGroup({
      email: new FormControl('', Validators.email),
      password: new FormControl(''),
      rol: new FormControl(''),
    })
  }
  
  onSubmit(){
    this.addWorker = {
      email: this.addWorkerForm.value['email'],
      password: this.addWorkerForm.value['password'],
      roles: this.addWorkerForm.value['rol'],
    }
    this.adminService.addWorkers(new workersInterface(this.addWorker.email, this.addWorker.password, this.addWorker.roles)).subscribe(
      (res) => {console.log(res)}
    )
    this.adminService.getWorkers().subscribe(
      (res: any) => {
        this.viewAdminComponent.workers= res
        console.log(res)
      },
      (err: any) => {
        err
      })
      this.reset()
  }

  reset() {
    this.addWorkerForm = new FormGroup({
      email: new FormControl(''),
      password: new FormControl(''),
      rol: new FormControl(''),
    })
  }

  onCloseModal(): void{
    this.closeModal.emit();
    
  }
}
