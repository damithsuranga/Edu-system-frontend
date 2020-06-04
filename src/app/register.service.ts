import { Injectable } from '@angular/core';
import {environment} from "../environments/environment";
import { HttpClient } from '@angular/common/http';
import { StudentRegister } from './dto/student-register';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

readonly BASE_URL = environment.apiUrl + 'student' + '/Register';
  constructor(private http: HttpClient) { }

  saveStudent(studentRegister:StudentRegister): Observable<string>{
    return this.http.post<string>(this.BASE_URL,studentRegister);
  }
  updateStudent(studentRegister:StudentRegister): Observable<null>{
    return this.http.put<null>(this.BASE_URL + `/${studentRegister.userName}`,studentRegister);
  }

}
