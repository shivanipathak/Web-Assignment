import { Component, OnInit } from '@angular/core';
//import { Component,OnInit } from '@angular/core';
import { TeacherService} from './teacher.service';
import { teacherInterface } from './teacherconfig';
//import { SubjectInterface } from './subjectconfig';
import { SubjectService } from '../subject/subject.service';
import { SubjectInterface } from '../subject/subjectconfig';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit {
  teacherList:teacherInterface[]
  form:boolean
  subjectId:number
  name:string

  subjectList:SubjectInterface[]

  constructor(private teacher:TeacherService,private subject:SubjectService) { 
    this.teacherList=[]
    this.subjectList=[]
  }

  ngOnInit() 
  {
    this.teacher.getData().subscribe((event:any)=>{
      this.teacherList=event;
      console.log(this.teacherList);
    })


    this.subject.getData().subscribe((event:any)=>{
      this.subjectList=event;
      console.log(this.subjectList);
    })

  }

  viewForm()
  {
    this.form=true
  }

  send(){
    console.log(this.name)
    console.log(this.subjectId)
    var newTeacher:teacherInterface={
    name:this.name,
    subjectId:this.subjectId
    };
    this.teacher.postData(newTeacher).subscribe((event:any)=>{
      this.teacherList=event
      console.log(this.teacherList)
    })
  }

  




}
