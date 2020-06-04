import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { StudentRegister } from '../dto/student-register';
import { NgForm } from '@angular/forms';
import { RegisterService } from '../register.service';

@Component({
  selector: 'app-register-student',
  templateUrl: './register-student.component.html',
  styleUrls: ['./register-student.component.scss']
})
export class RegisterStudentComponent implements OnInit {
  students : Array<StudentRegister> = [];
  currentStudent = new StudentRegister('','','','','','','');
  selectedStudent = null;
  hoverStudent = null;
  buttonText = 'save'
  @ViewChild('txtUserName', {static:false}) txtUserName:ElementRef;
  @ViewChild('frmStudent',{static:false}) frmStudent: NgForm;
  loadingStatus = true;

  constructor(private registerStudenrService : RegisterService) { }

  ngOnInit() {
  }

  clearForm(): void{
    this.currentStudent = new StudentRegister('','','','','','','');
    this.txtUserName.nativeElement.focus();
    this.frmStudent.resetForm();
  }

  saveStudent():void{
    if(this.frmStudent.valid){
      if(this.buttonText==='save'){
        console.log(this.currentStudent);
        this.registerStudenrService.saveStudent(this.currentStudent).subscribe(resp =>{
          alert('Student has been saved successfully');
          this.students.push(this.currentStudent);
        },error =>{
            alert('Faild to save');
            console.log(error);
        });
      }else{
        this.registerStudenrService.updateStudent(this.currentStudent).subscribe(resp =>{
          Object.assign(this.selectedStudent,this.currentStudent);
          alert('Student Details updated successfully');
          this.clearForm();
        },error =>{
          alert('Faild to update');
          console.log(error);
        });
      }
    }
  }
}
