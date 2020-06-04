import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ManageCustomerComponent } from './manage-customer/manage-customer.component';
import { ManageItemComponent } from './manage-item/manage-item.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import { ManageOrderComponent } from './manage-order/manage-order.component';
import { SearchOrderComponent } from './search-order/search-order.component';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import { PrimaryEducationComponent } from './primary-education/primary-education.component';
import { GradeSixEducationComponent } from './grade-six-education/grade-six-education.component';
import { GradeSevenEducationComponent } from './grade-seven-education/grade-seven-education.component';
import { GradeEightEducationComponent } from './grade-eight-education/grade-eight-education.component';
import { GradeNineEducationComponent } from './grade-nine-education/grade-nine-education.component';
import { GradeTenEducationComponent } from './grade-ten-education/grade-ten-education.component';
import { GradeOrdineryLevelEducationComponent } from './grade-ordinery-level-education/grade-ordinery-level-education.component';
import { GradeAdvancedLevelEducationComponent } from './grade-advanced-level-education/grade-advanced-level-education.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { LoginComponent } from './login/login.component';
import { MessageComponent } from './message/message.component';
import { ErrorMessageComponent } from './error-message/error-message.component';
import { RegisterStudentComponent } from './register-student/register-student.component';
//import {LoginComponent} from './login/login.component';
//import { from } from 'rxjs';
// import {PopupModule} from 'ng2-opd-popup';
// import { from } from 'rxjs';




@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ManageCustomerComponent,
    ManageItemComponent,
    ManageOrderComponent,
    SearchOrderComponent,
    PrimaryEducationComponent,
    GradeSixEducationComponent,
    GradeSevenEducationComponent,
    GradeEightEducationComponent,
    GradeNineEducationComponent,
    GradeTenEducationComponent,
    GradeOrdineryLevelEducationComponent,
    GradeAdvancedLevelEducationComponent,
    LoginComponent,
    MessageComponent,
    ErrorMessageComponent,
    RegisterStudentComponent,
    //LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatDialogModule
    // PopupModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
