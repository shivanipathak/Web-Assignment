import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StudentInterface } from './studentconfig';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  BASE_URL='http://localhost:3090/api/students'
  PARTICULAR_URL='http://localhost:3090/api/batches'
  
  //PARTICULAR_URL='http//localhost:3090/api/students'

  constructor(private http: HttpClient) { }
  getData()
  {
    return this.http.get<StudentInterface>(this.BASE_URL);
  }

  getParticularStudent(id:number)
  {
    return this.http.get<StudentInterface>(this.BASE_URL+'/'+id)
  }

  postData(value:object)
  {
    return this.http.post<StudentInterface>(this.BASE_URL,value);
  }

  getBatches()
  {
    return this.http.get(this. PARTICULAR_URL);
  }

  AddInMappingTable(studentid:number,batch:object)
  {
    return this.http.post(this.BASE_URL+'/'+studentid+'/batches',batch)
  }
  
}
