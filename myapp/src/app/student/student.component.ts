import { Component, OnInit } from '@angular/core';
import { StudentService} from './student.service';
import { StudentInterface } from './studentconfig';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  StudentList:StudentInterface[]
  batchList:Object[]
  SearchbyIdname:string
  particularStudent:StudentInterface
  viewDropdown:Boolean
  name:string
  form:boolean
  id:number
  batchId:string

  constructor(private student:StudentService) { 
    this.StudentList=[]

  }

  ngOnInit() 
  {
    this.student.getData().subscribe((event:any)=>{
      this.StudentList=event;
      console.log(this.StudentList);
    }) 

    this.student.getBatches().subscribe((event:any)=>{
      this.batchList=event;
      console.log(this.batchList);
    }) 

  }

  viewForm()
  {
    this.form=true
  }

  send()
  {
    
    var newStudent:StudentInterface={
    name:this.name,
    
    };
    this.student.postData(newStudent).subscribe((event:any)=>{
      this.StudentList=event
      console.log(this.StudentList)
    })
  }

  searchStudentById()
  {
    console.log('inside')
    this.id=parseInt(this.SearchbyIdname)
    this.student.getParticularStudent(this.id).subscribe((event:any)=>{
      this.particularStudent=this.StudentList[this.id-1]     
    })
    this.viewDropdown=true
    
  }

  EnrollBatch(){
    var batch:object={
      'batchId':parseInt(this.batchId)
    }
    this.student.AddInMappingTable(this.id,batch).subscribe((event=>{
      
      console.log('inserted')
    }))

  }

  



}
