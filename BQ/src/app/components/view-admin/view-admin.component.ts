import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/http.service';
import { AdminViewService } from '../../services/admin-view.service'

@Component({
  selector: 'app-view-admin',
  templateUrl: './view-admin.component.html',
  styleUrls: ['./view-admin.component.css']
})
export class ViewAdminComponent implements OnInit {
  
  modalSwitch: boolean = false;
  workers: any = [];

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
  
  deleteW() {
    this.adminService.deleteWorkers().subscribe(
      (res: any) => {
        this.workers = res
        console.log(res)
      },
      (err: any) => {
        err
      }
    )
  }

  logOut() {
    this.authservice.logout()
  }
}
