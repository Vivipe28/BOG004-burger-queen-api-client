import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IWorkersItem } from '../components/models/workers-item'

@Injectable({
  providedIn: 'root'
})
export class AdminViewService {

  url = 'http://localhost:8080';

  constructor(private http: HttpClient) { }
  
  getWorkers(): Observable<IWorkersItem> {
    const path = this.url + '/users'
    return this.http.get<IWorkersItem>(path)
  }

  getWorker(id: any) {
    const path = this.url + '/users/' + id
    return this.http.get(path)
  }

  addWorkers(worker: any) {
    const path = this.url + '/users'
    return this.http.post(path, worker)
  }

  editWorkers(id: any, worker:any) {
    const path = this.url + '/users/' + id
    return this.http.patch(path, worker)
  }

  deleteWorkers(id: any) {
    const path = this.url + '/users/' + id
    return this.http.delete(path)
  }

  patchWorker(id:any, worker:any){
    const path = this.url + '/users/' + id
    return this.http.patch(path, worker)
  }
}
