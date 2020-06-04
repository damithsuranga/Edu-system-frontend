import { Component } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { config } from 'rxjs';
import { LoginComponent } from './login/login.component';
//import {Popup} from 'ng2-opd-popup'
// import { from } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'E-education-center';

  // constructor (private popup:Popup){}

  // Clickit(){
  //   this.popup.show();
  // }
  constructor(public matDialog:MatDialog){}

  openModal(){
    const dialigConfig = new MatDialogConfig
    dialigConfig.disableClose = true;
    dialigConfig.id = "model-config";
    dialigConfig.height = "350px"
    dialigConfig.width = "600px"
    const modalDialog = this.matDialog.open(LoginComponent,dialigConfig)
  }
}
