import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class NotifierService {

  constructor(private snackbar:MatSnackBar) { }

  showNotification(msg:string, btn:string){
    this.snackbar.open(msg,btn,{duration:5*1000,panelClass:'alert-red'})
  }
}
