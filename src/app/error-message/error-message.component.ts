import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-error-message',
  templateUrl: './error-message.component.html',
  styleUrls: ['./error-message.component.scss']
})
export class ErrorMessageComponent implements OnInit {

  constructor(private dialogRef : MatDialogRef<ErrorMessageComponent>,@Inject(MAT_DIALOG_DATA) public data : any) { }

  public closeMe(){
    this.dialogRef.close();
  }

  ngOnInit() {
  }

}
