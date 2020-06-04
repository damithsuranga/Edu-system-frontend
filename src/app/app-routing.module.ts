import {Component, NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ManageCustomerComponent} from "./manage-customer/manage-customer.component";
import {ManageItemComponent} from "./manage-item/manage-item.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {ManageOrderComponent} from "./manage-order/manage-order.component";
import {SearchOrderComponent} from "./search-order/search-order.component";
import { PrimaryEducationComponent } from './primary-education/primary-education.component';
import { GradeSixEducationComponent } from './grade-six-education/grade-six-education.component';
import { GradeSevenEducationComponent } from './grade-seven-education/grade-seven-education.component';
import { GradeEightEducationComponent } from './grade-eight-education/grade-eight-education.component';
import { GradeNineEducationComponent } from './grade-nine-education/grade-nine-education.component';
import { GradeTenEducationComponent } from './grade-ten-education/grade-ten-education.component';
import { GradeOrdineryLevelEducationComponent } from './grade-ordinery-level-education/grade-ordinery-level-education.component';
import { GradeAdvancedLevelEducationComponent } from './grade-advanced-level-education/grade-advanced-level-education.component';
import { LoginComponent } from './login/login.component';
import { MessageComponent } from './message/message.component';
import { RegisterStudentComponent } from './register-student/register-student.component';

const routes: Routes = [
  {
    component: ManageCustomerComponent,
    path: 'customer'
  },
  {
    component: ManageItemComponent,
    path: 'item'
  },
  {
    component: DashboardComponent,
    path: 'dashboard'
  },
  {
    component: ManageOrderComponent,
    path: 'order'
  },
  {
    component:SearchOrderComponent,
    path:'search'
  },
  {
    component:PrimaryEducationComponent,
    path:'PrimaryEducation'
  },
  {
    component:GradeSixEducationComponent,
    path:'Gradesixeducation'
  },
  {
    component:GradeSevenEducationComponent,
    path:'Gradeseveneducation'
  },
  {
    component:GradeEightEducationComponent,
    path:'Gradeeighteducation'
  },
  {
    component:GradeNineEducationComponent,
    path:'Gradenineeducation'
  },
  {
    component:GradeTenEducationComponent,
    path:'Gradeteneducation'
  },
  {
    component:GradeOrdineryLevelEducationComponent,
    path:'GradeOrdineryLeveleducation'
  },
  {
    component:GradeAdvancedLevelEducationComponent,
    path:'GradeAdvancedLeveleducation'
  },
  {
    component:LoginComponent,
    path:'Login'
  },
  {
    component:MessageComponent,
    path:'Message'
  },
  {
  component:RegisterStudentComponent,
  path:'Register'
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/dashboard'
  }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
