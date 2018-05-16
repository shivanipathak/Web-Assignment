import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SubjectInterface } from './subjectconfig';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  BASE_URL='http://localhost:3090/api/subjects'

  constructor(private http: HttpClient) { }
  getData()
  {
    return this.http.get<SubjectInterface>(this.BASE_URL);
  }

  postData(value:object)
  {
    return this.http.post<SubjectInterface>(this.BASE_URL,value);
  }
  
}
