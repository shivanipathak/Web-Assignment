import { Component, OnInit } from '@angular/core';
import { SubjectService} from './subject.service';
import { SubjectInterface } from './subjectconfig';
import { CourseService } from '../course/course.service';
import { CourseInterface } from '../course/courseconfig';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit {

  subjectList:SubjectInterface[]
  courseList:CourseInterface[]
  form:boolean
  name:string
  courseId:number

  constructor(private subject:SubjectService,private course:CourseService) { 
    this.subjectList=[]
    this.courseList=[]
  }

  ngOnInit() 
  {
    this.subject.getData().subscribe((event:any)=>{
      this.subjectList=event;
      console.log(this.subjectList);
    })
    this.course.getData().subscribe((event:any)=>{
      this.courseList=event;
      console.log(this.courseList);
    })

  
  }

  viewForm()
  {
    this.form=true
  }

  send()
  {
    
    var newSubject:SubjectInterface={
    name:this.name,
    courseId:this.courseId
    };
    this.subject.postData(newSubject).subscribe((event:any)=>{
      this.subjectList=event
      console.log(this.subjectList)
    })
  }
}
