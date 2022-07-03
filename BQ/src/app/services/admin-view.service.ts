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

  deleteWorkers(): Observable<IWorkersItem> {
    const path = this.url + '/users'
    return this.http.delete<IWorkersItem>(path)
  }
}
