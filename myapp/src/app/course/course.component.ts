import { Component, OnInit } from '@angular/core';
import { CourseService } from './course.service';
import { CourseInterface } from './courseconfig';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  courseList: CourseInterface[]
  batchList: object[]
  lectureList:object[]
  studentList:object[]
  form: boolean
  name: string
  show: boolean
  courseId
  batchId

  //subjectList:SubjectInterface[]

  constructor(private course: CourseService) {
    this.courseList = []
    this.batchList = []
    this.lectureList=[]
    this.studentList=[]
    //this.subjectList=[]
  }

  ngOnInit() {
    this.course.getData().subscribe((event: any) => {
      this.courseList = event;
      console.log(this.courseList);
    })
  }

  viewForm() {
    this.form = true
  }

  viewBatches(id:number){
    this.courseId=id
    this.getCourseBatches() 
  }

  send() {
    // console.log(this.name)
    // console.log(this.subjectId)
    var newCourse: CourseInterface = {
      name: this.name,
      //courseId:this.courseId
    };
    this.course.postData(newCourse).subscribe((event: any) => {
      this.courseList = event
      console.log(this.courseList)
    })
  }

  getCourseBatches() {
    this.show = true
    
    this.course.getBatches(this.courseId).subscribe((event: any) => {
      this.batchList = event;
      console.log(this.batchList);
    })
  }

  postCourseBatches(name: string) {
    var  batch: Object = {
      name: name
    }
    this.course.addBatch(this.courseId, batch).subscribe((event: any) => {
      this.batchList = event
      console.log(this.batchList)
    })
  }

  getCourseLectures(id)
  {
    this.batchId=id
    this.course.getLectures(this.courseId,this.batchId).subscribe((event:any)=>{
      this.lectureList=event
      console.log(this.lectureList)
    })

  }

  getCourseStudents(id)
  {
    this.batchId=id
    this.course.getStudents(this.courseId,this.batchId).subscribe((event:any)=>{
      this.studentList=event
      console.log(this.studentList)
    })

  }

  postLecture(lecturename:string)
  {
    var datao={
      name:lecturename
    }
    this.course.addLecture(this.courseId,this.batchId,datao).subscribe((event:any)=>{
      console.log('added')
    })

  }

}
