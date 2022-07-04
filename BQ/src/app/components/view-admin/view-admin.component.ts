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
    //console.log(this.modalSwitch);
    
  }

  closeModal(){
    this.modalSwitch = false;
    //console.log(this.modalSwitch);
  }

  openModalEdit(){
    this.modalSwitchEdit = true; 
  }

  closeModalEdit(){
    this.modalSwitchEdit = false; 
  }

  getWorker1(id: any){
    this.adminService.getWorker(id).subscribe(
      res => {
        this.getWorkerResponse = res
        localStorage.setItem('userId', JSON.stringify(this.getWorkerResponse.id))
      }
    )
  }

  deleteW(id: any) {
    if (confirm('¿Estas seguro de eliminar el colaborador?')) {
      this.adminService.deleteWorkers(id).subscribe(
        (res: any) => {
          this.workers = res
          console.log(this.workers);
        },
        (err: any) => {
          err
        }
      )
      this.adminService.getWorkers().subscribe(
        (res: any) => {
          this.workers = res
        },
        (err: any) => {
          err
        })
    }
  }

  logOut() {
    this.authservice.logout()
  }
}
