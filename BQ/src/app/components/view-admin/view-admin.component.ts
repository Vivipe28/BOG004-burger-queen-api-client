import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/http.service';
import { AdminViewService } from '../../services/admin-view.service'
import { workersInterface } from '../models/Workers'

@Component({
  selector: 'app-view-admin',
  templateUrl: './view-admin.component.html',
  styleUrls: ['./view-admin.component.css']
})
export class ViewAdminComponent implements OnInit {
  
  modalSwitch: boolean = false;
  modalSwitchEdit: boolean = false;
  workers: any = [];
  getWorkerResponse: any = {}; 

  constructor(private adminService: AdminViewService, private authservice: AuthService) { }

  ngOnInit(): void {
    this.adminService.getWorkers().subscribe(
      (res: any) => {
        this.workers = res
        console.log(res)
      },
      (err: any) => {
        err
      })
  }

  openModal(){
    this.modalSwitch = true;
    
  }

  closeModal(){
    this.modalSwitch = false;
  }

  openModalEdit(id:any){
    this.modalSwitchEdit = true; 
    this.adminService.getWorker(id).subscribe(
      res => {
        this.getWorkerResponse = res
      }
    )
  }

  closeModalEdit(){
    this.modalSwitchEdit = false; 
  }

  deleteW(id: any) {
    if (confirm('¿Estas seguro de eliminar el colaborador?')) {
      this.adminService.deleteWorkers(id).subscribe(
        (res: any) => {

        }
      )
    }
    this.adminService.getWorkers().subscribe(
      (res: any) => {
        this.workers = res
      },
      (err: any) => {
        err
      })
  }

  logOut() {
    this.authservice.logout()
  }
}
