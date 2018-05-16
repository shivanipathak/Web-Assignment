import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { teacherInterface } from './teacherconfig';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  BASE_URL='http://localhost:3090/api/teachers'

  constructor(private http: HttpClient) { }
  getData()
  {
    return this.http.get<teacherInterface>(this.BASE_URL);
  }

  postData(value:teacherInterface)
  {
    return this.http.post<teacherInterface>(this.BASE_URL,value);
  }
  
}
