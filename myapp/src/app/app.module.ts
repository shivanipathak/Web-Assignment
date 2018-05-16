import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{FormsModule} from '@angular/forms';
import { Routes,RouterModule } from '@angular/router';
import {HttpClientModule}  from '@angular/common/http'
//import { AppRoutingModule }  from './app-routing.module';


import { AppComponent } from './app.component';
import { TeacherComponent } from './teacher/teacher.component';
import { SubjectComponent } from './subject/subject.component';
import { CourseComponent } from './course/course.component';
import { StudentComponent } from './student/student.component';
import { TeacherService } from './teacher/teacher.service';
import { SubjectService } from './subject/subject.service';
import { StudentService } from './student/student.service';
import { CourseService } from './course/course.service';
//import { TeacherfromComponent } from './teacher/teacherfrom/teacherfrom.component';

const appRoutes:Routes=[{  path:'course', component:CourseComponent},
{path:'teacher',component:TeacherComponent},
{path:'subject',component:SubjectComponent},
{path:'student',component:StudentComponent}
]


@NgModule({
  declarations: [
    AppComponent,
    TeacherComponent,
    SubjectComponent,
    CourseComponent,
    StudentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,{enableTracing: true}
    )
  ],
  providers: [TeacherService,SubjectService,StudentService,CourseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
