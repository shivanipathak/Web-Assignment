import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CourseInterface } from './courseconfig';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  
  BASE_URL='http://localhost:3090/api/courses'

  constructor(private http: HttpClient) { }
  getData()
  {
    return this.http.get<CourseInterface>(this.BASE_URL);
  }

  postData(value:object)
  {
    return this.http.post<CourseInterface>(this.BASE_URL,value);
  }

  getBatches(courseId:number)
  {
    return this.http.get(this.BASE_URL+'/'+courseId+'/batches');
  }

  addBatch(courseId,batch:object){
    return this.http.post(this.BASE_URL+'/'+courseId+'/batches',batch)
    
    }
    
    getLectures(courseId:number,batchId:number)
    {
      return this.http.get(this.BASE_URL+'/'+courseId+'/batches/'+batchId+'/lectures')

    }

    getStudents(courseId:number,batchId:number)
    {
      return this.http.get(this.BASE_URL+'/'+courseId+'/batches/'+batchId+'/students')

    }
    addLecture(courseId,batchId,lecturename:object)
    {
      return this.http.post(this.BASE_URL+'/'+courseId+'/batches/'+batchId+'/lectures',lecturename)
    }
}
