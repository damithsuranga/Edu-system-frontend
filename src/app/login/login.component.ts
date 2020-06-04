import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { MessageComponent } from '../message/message.component';
import { ErrorMessageComponent } from '../error-message/error-message.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public email : String = "";
  public password : String = "";

  constructor(private dialog: MatDialog,private router:Router) { }

  login(){
    if(this.email==="abc@gmail.com" && this.password==="abc"){
      this.router.navigate(['Success'])
      this.dialog.open(ErrorMessageComponent)
    }else{
      this.dialog.open(ErrorMessageComponent)
    }
  }

  ngOnInit() {
  }

}
