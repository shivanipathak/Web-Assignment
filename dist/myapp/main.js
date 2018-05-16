(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <nav>\n    <a routerLink=\"/course\" routerLinkActive=\"active\">Courses</a>\n    <a routerLink=\"/student\" routerLinkActive=\"active\">Students</a>\n    <a routerLink=\"/teacher\" routerLinkActive=\"active\">Teachers</a>\n    <a routerLink=\"/subject\" routerLinkActive=\"active\">Subjects</a>\n    </nav> -->\n    \n        <nav class=\"navbar navbar-light bg-dark\">\n            <a routerLink=\"/course\" routerLinkActive=\"active\">Courses</a>\n        <a routerLink=\"/student\" routerLinkActive=\"active\">Students</a>\n        <a routerLink=\"/teacher\" routerLinkActive=\"active\">Teachers</a>\n        <a routerLink=\"/subject\" routerLinkActive=\"active\">Subjects</a>\n          </nav>\n        <router-outlet> </router-outlet>\n    \n    \n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _teacher_teacher_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./teacher/teacher.component */ "./src/app/teacher/teacher.component.ts");
/* harmony import */ var _subject_subject_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./subject/subject.component */ "./src/app/subject/subject.component.ts");
/* harmony import */ var _course_course_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./course/course.component */ "./src/app/course/course.component.ts");
/* harmony import */ var _student_student_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./student/student.component */ "./src/app/student/student.component.ts");
/* harmony import */ var _teacher_teacher_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./teacher/teacher.service */ "./src/app/teacher/teacher.service.ts");
/* harmony import */ var _subject_subject_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./subject/subject.service */ "./src/app/subject/subject.service.ts");
/* harmony import */ var _student_student_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./student/student.service */ "./src/app/student/student.service.ts");
/* harmony import */ var _course_course_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./course/course.service */ "./src/app/course/course.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





//import { AppRoutingModule }  from './app-routing.module';









//import { TeacherfromComponent } from './teacher/teacherfrom/teacherfrom.component';
var appRoutes = [{ path: 'course', component: _course_course_component__WEBPACK_IMPORTED_MODULE_8__["CourseComponent"] },
    { path: 'teacher', component: _teacher_teacher_component__WEBPACK_IMPORTED_MODULE_6__["TeacherComponent"] },
    { path: 'subject', component: _subject_subject_component__WEBPACK_IMPORTED_MODULE_7__["SubjectComponent"] },
    { path: 'student', component: _student_student_component__WEBPACK_IMPORTED_MODULE_9__["StudentComponent"] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _teacher_teacher_component__WEBPACK_IMPORTED_MODULE_6__["TeacherComponent"],
                _subject_subject_component__WEBPACK_IMPORTED_MODULE_7__["SubjectComponent"],
                _course_course_component__WEBPACK_IMPORTED_MODULE_8__["CourseComponent"],
                _student_student_component__WEBPACK_IMPORTED_MODULE_9__["StudentComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(appRoutes, { enableTracing: true })
            ],
            providers: [_teacher_teacher_service__WEBPACK_IMPORTED_MODULE_10__["TeacherService"], _subject_subject_service__WEBPACK_IMPORTED_MODULE_11__["SubjectService"], _student_student_service__WEBPACK_IMPORTED_MODULE_12__["StudentService"], _course_course_service__WEBPACK_IMPORTED_MODULE_13__["CourseService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/course/course.component.css":
/*!*********************************************!*\
  !*** ./src/app/course/course.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/course/course.component.html":
/*!**********************************************!*\
  !*** ./src/app/course/course.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\">\n  <title>Course List</title>\n</head>\n<body>\n    <div class=\"container\">\n        <br/>\n        <br/>\n        \n        <div *ngIf=\"!form\">\n          \n            <ul id=\"grouplist\" class=\"list-group\" >\n                <li class=\"list-group-item active\">Courses!</li>\n                <li class=\"list-group-item\" *ngFor=\"let i of courseList;let y=index\" (click)=\"viewBatches(i.id)\" [ngClass]=\"{'active': selectedIndex == y, 'list-group-item': true}\"  >{{i.name}}</li>\n            </ul>\n            <br/>\n          <br/>\n            <button class='button' (click)=\"viewForm()\">Add Course</button>\n\n            <div *ngIf='show'>\n                <ul >\n                    <br/>\n                    <br/>\n                        <li class=\"list-group-item active\">Batches!</li>\n                        <li class=\"list-group-item\" *ngFor=\"let i of batchList;let y=index\" > \n                            {{i.name}}\n                            <button (click)='getCourseLectures(i.id)'>Lectures</button>\n                            <button (click)='getCourseStudents(i.id)'>Students</button>\n                        </li>\n                  </ul>\n                  <div>\n                      <ul>\n                          <li>lectures!</li>\n                          <li *ngFor=\"let i of lectureList;let y=index\">{{i.name}}</li>\n                      </ul>\n                      <label for=\"Lecture Name\">Name</label>\n                      <input type=\"text\" #lecturename  required>\n                      <button (click)='postLecture(lecturename.value)'>Add Lecture</button>\n                  </div>\n\n                  <div>\n                        <ul>\n                            <li>students!</li>\n                            <li *ngFor=\"let i of studentList;let y=index\">{{i.name}}</li>\n                        </ul>\n                    </div>\n\n                    <div>\n\n                    </div>\n\n\n                  <br/>\n                  <br/>\n                  <div>\n                      <label for=\"Batch Name\">Name</label>\n                      <input type=\"text\" #batchname  required>\n                      <button (click)='postCourseBatches(batchname.value)'>Add Batch</button>\n                      \n                  </div>\n\n\n            </div>\n            \n      \n        </div>\n        <div *ngIf='form'>\n            \n                <label for=\"name\">Name</label>\n                <input type=\"text\" class=\"form-control\" [(ngModel)]=\"name\"  required>\n          \n          <button (click)='send()'>Add!</button>   \n        </div>\n  \n    </div>\n    \n      \n  </body>\n</html>"

/***/ }),

/***/ "./src/app/course/course.component.ts":
/*!********************************************!*\
  !*** ./src/app/course/course.component.ts ***!
  \********************************************/
/*! exports provided: CourseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseComponent", function() { return CourseComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _course_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./course.service */ "./src/app/course/course.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CourseComponent = /** @class */ (function () {
    //subjectList:SubjectInterface[]
    function CourseComponent(course) {
        this.course = course;
        this.courseList = [];
        this.batchList = [];
        this.lectureList = [];
        this.studentList = [];
        //this.subjectList=[]
    }
    CourseComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.course.getData().subscribe(function (event) {
            _this.courseList = event;
            console.log(_this.courseList);
        });
    };
    CourseComponent.prototype.viewForm = function () {
        this.form = true;
    };
    CourseComponent.prototype.viewBatches = function (id) {
        this.courseId = id;
        this.getCourseBatches();
    };
    CourseComponent.prototype.send = function () {
        var _this = this;
        // console.log(this.name)
        // console.log(this.subjectId)
        var newCourse = {
            name: this.name,
        };
        this.course.postData(newCourse).subscribe(function (event) {
            _this.courseList = event;
            console.log(_this.courseList);
        });
    };
    CourseComponent.prototype.getCourseBatches = function () {
        var _this = this;
        this.show = true;
        this.course.getBatches(this.courseId).subscribe(function (event) {
            _this.batchList = event;
            console.log(_this.batchList);
        });
    };
    CourseComponent.prototype.postCourseBatches = function (name) {
        var _this = this;
        var batch = {
            name: name
        };
        this.course.addBatch(this.courseId, batch).subscribe(function (event) {
            _this.batchList = event;
            console.log(_this.batchList);
        });
    };
    CourseComponent.prototype.getCourseLectures = function (id) {
        var _this = this;
        this.batchId = id;
        this.course.getLectures(this.courseId, this.batchId).subscribe(function (event) {
            _this.lectureList = event;
            console.log(_this.lectureList);
        });
    };
    CourseComponent.prototype.getCourseStudents = function (id) {
        var _this = this;
        this.batchId = id;
        this.course.getStudents(this.courseId, this.batchId).subscribe(function (event) {
            _this.studentList = event;
            console.log(_this.studentList);
        });
    };
    CourseComponent.prototype.postLecture = function (lecturename) {
        var datao = {
            name: lecturename
        };
        this.course.addLecture(this.courseId, this.batchId, datao).subscribe(function (event) {
            console.log('added');
        });
    };
    CourseComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-course',
            template: __webpack_require__(/*! ./course.component.html */ "./src/app/course/course.component.html"),
            styles: [__webpack_require__(/*! ./course.component.css */ "./src/app/course/course.component.css")]
        }),
        __metadata("design:paramtypes", [_course_service__WEBPACK_IMPORTED_MODULE_1__["CourseService"]])
    ], CourseComponent);
    return CourseComponent;
}());



/***/ }),

/***/ "./src/app/course/course.service.ts":
/*!******************************************!*\
  !*** ./src/app/course/course.service.ts ***!
  \******************************************/
/*! exports provided: CourseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseService", function() { return CourseService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CourseService = /** @class */ (function () {
    function CourseService(http) {
        this.http = http;
        this.BASE_URL = 'http://localhost:3090/api/courses';
    }
    CourseService.prototype.getData = function () {
        return this.http.get(this.BASE_URL);
    };
    CourseService.prototype.postData = function (value) {
        return this.http.post(this.BASE_URL, value);
    };
    CourseService.prototype.getBatches = function (courseId) {
        return this.http.get(this.BASE_URL + '/' + courseId + '/batches');
    };
    CourseService.prototype.addBatch = function (courseId, batch) {
        return this.http.post(this.BASE_URL + '/' + courseId + '/batches', batch);
    };
    CourseService.prototype.getLectures = function (courseId, batchId) {
        return this.http.get(this.BASE_URL + '/' + courseId + '/batches/' + batchId + '/lectures');
    };
    CourseService.prototype.getStudents = function (courseId, batchId) {
        return this.http.get(this.BASE_URL + '/' + courseId + '/batches/' + batchId + '/students');
    };
    CourseService.prototype.addLecture = function (courseId, batchId, lecturename) {
        return this.http.post(this.BASE_URL + '/' + courseId + '/batches/' + batchId + '/lectures', lecturename);
    };
    CourseService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], CourseService);
    return CourseService;
}());



/***/ }),

/***/ "./src/app/student/student.component.css":
/*!***********************************************!*\
  !*** ./src/app/student/student.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/student/student.component.html":
/*!************************************************!*\
  !*** ./src/app/student/student.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\">\n  <title>Document</title>\n</head>\n<body>\n    <div class=\"container\">\n      <br/>\n      <br/>\n        <div class=\"row\">\n            <div class=\"col-lg-6\">\n              <div class=\"input-group\">\n                <span class=\"input-group-btn\">\n                  <button class=\"btn btn-secondary\" (click)='searchStudentById()' type=\"button\">Go!</button>\n                </span>\n                <input type=\"text\" class=\"form-control\" [(ngModel)]=\"SearchbyIdname\"  required placeholder=\"Enter student id...\">\n              </div>\n\n              <select [(ngModel)]='batchId' *ngIf='viewDropdown'>\n                  <option *ngFor=\"let i of batchList;let y=index\" [ngValue]='i.id' >{{i.name}} </option>\n              </select>\n              <button class=\"btn btn-secondary\" (click)='EnrollBatch()' type=\"button\">Enroll!</button>\n\n            </div>\n          </div>\n\n      <div>\n        {{particularStudent.name}}\n      </div>\n       \n        <div *ngIf=\"!form\">\n          <br>\n          <br>\n            <ul class=\"list-group\" >\n                <li class=\"list-group-item active\">Students!</li>\n                <li class=\"list-group-item\" *ngFor=\"let i of StudentList;let y=index\"  >{{i.name}}</li>\n            </ul>\n            <br/>\n            <br/>\n            <button class='button' (click)=\"viewForm()\">Add Student</button>\n      \n        </div>\n        <div *ngIf='form'>\n            \n                <label for=\"name\">Name</label>\n                <input type=\"text\" class=\"form-control\" [(ngModel)]=\"name\"  required>\n          \n              <button (click)='send()'>Add!</button>\n          \n        </div>\n  \n    </div>\n    \n      \n  </body>\n</html>\n"

/***/ }),

/***/ "./src/app/student/student.component.ts":
/*!**********************************************!*\
  !*** ./src/app/student/student.component.ts ***!
  \**********************************************/
/*! exports provided: StudentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentComponent", function() { return StudentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _student_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./student.service */ "./src/app/student/student.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var StudentComponent = /** @class */ (function () {
    function StudentComponent(student) {
        this.student = student;
        this.StudentList = [];
    }
    StudentComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.student.getData().subscribe(function (event) {
            _this.StudentList = event;
            console.log(_this.StudentList);
        });
        this.student.getBatches().subscribe(function (event) {
            _this.batchList = event;
            console.log(_this.batchList);
        });
    };
    StudentComponent.prototype.viewForm = function () {
        this.form = true;
    };
    StudentComponent.prototype.send = function () {
        var _this = this;
        var newStudent = {
            name: this.name,
        };
        this.student.postData(newStudent).subscribe(function (event) {
            _this.StudentList = event;
            console.log(_this.StudentList);
        });
    };
    StudentComponent.prototype.searchStudentById = function () {
        var _this = this;
        console.log('inside');
        this.id = parseInt(this.SearchbyIdname);
        this.student.getParticularStudent(this.id).subscribe(function (event) {
            _this.particularStudent = _this.StudentList[_this.id - 1];
        });
        this.viewDropdown = true;
    };
    StudentComponent.prototype.EnrollBatch = function () {
        var batch = {
            'batchId': parseInt(this.batchId)
        };
        this.student.AddInMappingTable(this.id, batch).subscribe((function (event) {
            console.log('inserted');
        }));
    };
    StudentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-student',
            template: __webpack_require__(/*! ./student.component.html */ "./src/app/student/student.component.html"),
            styles: [__webpack_require__(/*! ./student.component.css */ "./src/app/student/student.component.css")]
        }),
        __metadata("design:paramtypes", [_student_service__WEBPACK_IMPORTED_MODULE_1__["StudentService"]])
    ], StudentComponent);
    return StudentComponent;
}());



/***/ }),

/***/ "./src/app/student/student.service.ts":
/*!********************************************!*\
  !*** ./src/app/student/student.service.ts ***!
  \********************************************/
/*! exports provided: StudentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentService", function() { return StudentService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var StudentService = /** @class */ (function () {
    //PARTICULAR_URL='http//localhost:3090/api/students'
    function StudentService(http) {
        this.http = http;
        this.BASE_URL = 'http://localhost:3090/api/students';
        this.PARTICULAR_URL = 'http://localhost:3090/api/batches';
    }
    StudentService.prototype.getData = function () {
        return this.http.get(this.BASE_URL);
    };
    StudentService.prototype.getParticularStudent = function (id) {
        return this.http.get(this.BASE_URL + '/' + id);
    };
    StudentService.prototype.postData = function (value) {
        return this.http.post(this.BASE_URL, value);
    };
    StudentService.prototype.getBatches = function () {
        return this.http.get(this.PARTICULAR_URL);
    };
    StudentService.prototype.AddInMappingTable = function (studentid, batch) {
        return this.http.post(this.BASE_URL + '/' + studentid + '/batches', batch);
    };
    StudentService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], StudentService);
    return StudentService;
}());



/***/ }),

/***/ "./src/app/subject/subject.component.css":
/*!***********************************************!*\
  !*** ./src/app/subject/subject.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/subject/subject.component.html":
/*!************************************************!*\
  !*** ./src/app/subject/subject.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\">\n  <title>Subjects List</title>\n</head>\n<body>\n    <div class=\"container\">\n        <br>\n        <br>\n        <div *ngIf=\"!form\">\n          \n            <ul class=\"list-group\" >\n                <li class=\"list-group-item active\">Subjects!</li>\n                <li class=\"list-group-item\" *ngFor=\"let i of subjectList;let y=index\"  >{{i.name}}</li>\n            </ul>\n            <br/>\n          <br/>\n            <button class='button' (click)=\"viewForm()\">Add Subject</button>\n      \n        </div>\n        <div *ngIf='form'>\n            \n                <label for=\"name\">Name</label>\n                <input type=\"text\" class=\"form-control\" [(ngModel)]=\"name\"  required>\n                \n          \n              <select [(ngModel)]='courseId'>\n                  <option *ngFor=\"let i of courseList;let y=index\" [ngValue]='i.id' #option>{{i.name}} </option>\n              </select>\n          \n          <button (click)='send()'>Add!</button>\n          \n        </div>\n  \n    </div>\n</body>\n</html>\n"

/***/ }),

/***/ "./src/app/subject/subject.component.ts":
/*!**********************************************!*\
  !*** ./src/app/subject/subject.component.ts ***!
  \**********************************************/
/*! exports provided: SubjectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubjectComponent", function() { return SubjectComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _subject_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./subject.service */ "./src/app/subject/subject.service.ts");
/* harmony import */ var _course_course_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../course/course.service */ "./src/app/course/course.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SubjectComponent = /** @class */ (function () {
    function SubjectComponent(subject, course) {
        this.subject = subject;
        this.course = course;
        this.subjectList = [];
        this.courseList = [];
    }
    SubjectComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subject.getData().subscribe(function (event) {
            _this.subjectList = event;
            console.log(_this.subjectList);
        });
        this.course.getData().subscribe(function (event) {
            _this.courseList = event;
            console.log(_this.courseList);
        });
    };
    SubjectComponent.prototype.viewForm = function () {
        this.form = true;
    };
    SubjectComponent.prototype.send = function () {
        var _this = this;
        var newSubject = {
            name: this.name,
            courseId: this.courseId
        };
        this.subject.postData(newSubject).subscribe(function (event) {
            _this.subjectList = event;
            console.log(_this.subjectList);
        });
    };
    SubjectComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-subject',
            template: __webpack_require__(/*! ./subject.component.html */ "./src/app/subject/subject.component.html"),
            styles: [__webpack_require__(/*! ./subject.component.css */ "./src/app/subject/subject.component.css")]
        }),
        __metadata("design:paramtypes", [_subject_service__WEBPACK_IMPORTED_MODULE_1__["SubjectService"], _course_course_service__WEBPACK_IMPORTED_MODULE_2__["CourseService"]])
    ], SubjectComponent);
    return SubjectComponent;
}());



/***/ }),

/***/ "./src/app/subject/subject.service.ts":
/*!********************************************!*\
  !*** ./src/app/subject/subject.service.ts ***!
  \********************************************/
/*! exports provided: SubjectService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubjectService", function() { return SubjectService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SubjectService = /** @class */ (function () {
    function SubjectService(http) {
        this.http = http;
        this.BASE_URL = 'http://localhost:3090/api/subjects';
    }
    SubjectService.prototype.getData = function () {
        return this.http.get(this.BASE_URL);
    };
    SubjectService.prototype.postData = function (value) {
        return this.http.post(this.BASE_URL, value);
    };
    SubjectService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], SubjectService);
    return SubjectService;
}());



/***/ }),

/***/ "./src/app/teacher/teacher.component.css":
/*!***********************************************!*\
  !*** ./src/app/teacher/teacher.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/teacher/teacher.component.html":
/*!************************************************!*\
  !*** ./src/app/teacher/teacher.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\">\n  <div class=\"jumbotron jumbotron-fluid\">\n      <div class=\"container-fluid\">\n        <h1 class=\"display-4\">Teacher's List</h1>\n        <p class=\"lead\">Below our staff</p>\n      </div>\n    </div>\n  <!-- <title>Teacher's List</title> -->\n</head>\n<body>\n  <div class=\"container\">\n    <br>\n    <br>\n      <div *ngIf=\"!form\">\n          <ul class=\"list-group\" >\n              <li class=\"list-group-item active\">Teachers!</li>\n              <li class=\"list-group-item\" *ngFor=\"let i of teacherList;let y=index\"  >{{i.name}}</li>\n          </ul>\n          <br/>\n          <br/>\n          <button class='button' (click)=\"viewForm()\">Add Teacher</button>\n    \n      </div>\n      <div *ngIf='form'>\n          \n              <label for=\"name\">Name</label>\n              <input type=\"text\" class=\"form-control\" [(ngModel)]=\"name\"  required>\n              \n              <div>\n                  <label for=\"name\">Select</label>\n                  <select [(ngModel)]='subjectId'>\n                      <option *ngFor=\"let i of subjectList;let y=index\" [ngValue]='i.id' #option>{{i.name}} </option>\n                  </select>\n              </div>\n\n              <div>\n                  <button (click)='send()'>Add!</button>\n              </div>\n      </div>\n\n  </div>\n  \n    \n</body>\n</html>\n\n\n "

/***/ }),

/***/ "./src/app/teacher/teacher.component.ts":
/*!**********************************************!*\
  !*** ./src/app/teacher/teacher.component.ts ***!
  \**********************************************/
/*! exports provided: TeacherComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeacherComponent", function() { return TeacherComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _teacher_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./teacher.service */ "./src/app/teacher/teacher.service.ts");
/* harmony import */ var _subject_subject_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../subject/subject.service */ "./src/app/subject/subject.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//import { Component,OnInit } from '@angular/core';

//import { SubjectInterface } from './subjectconfig';

var TeacherComponent = /** @class */ (function () {
    function TeacherComponent(teacher, subject) {
        this.teacher = teacher;
        this.subject = subject;
        this.teacherList = [];
        this.subjectList = [];
    }
    TeacherComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.teacher.getData().subscribe(function (event) {
            _this.teacherList = event;
            console.log(_this.teacherList);
        });
        this.subject.getData().subscribe(function (event) {
            _this.subjectList = event;
            console.log(_this.subjectList);
        });
    };
    TeacherComponent.prototype.viewForm = function () {
        this.form = true;
    };
    TeacherComponent.prototype.send = function () {
        var _this = this;
        console.log(this.name);
        console.log(this.subjectId);
        var newTeacher = {
            name: this.name,
            subjectId: this.subjectId
        };
        this.teacher.postData(newTeacher).subscribe(function (event) {
            _this.teacherList = event;
            console.log(_this.teacherList);
        });
    };
    TeacherComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-teacher',
            template: __webpack_require__(/*! ./teacher.component.html */ "./src/app/teacher/teacher.component.html"),
            styles: [__webpack_require__(/*! ./teacher.component.css */ "./src/app/teacher/teacher.component.css")]
        }),
        __metadata("design:paramtypes", [_teacher_service__WEBPACK_IMPORTED_MODULE_1__["TeacherService"], _subject_subject_service__WEBPACK_IMPORTED_MODULE_2__["SubjectService"]])
    ], TeacherComponent);
    return TeacherComponent;
}());



/***/ }),

/***/ "./src/app/teacher/teacher.service.ts":
/*!********************************************!*\
  !*** ./src/app/teacher/teacher.service.ts ***!
  \********************************************/
/*! exports provided: TeacherService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeacherService", function() { return TeacherService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TeacherService = /** @class */ (function () {
    function TeacherService(http) {
        this.http = http;
        this.BASE_URL = 'http://localhost:3090/api/teachers';
    }
    TeacherService.prototype.getData = function () {
        return this.http.get(this.BASE_URL);
    };
    TeacherService.prototype.postData = function (value) {
        return this.http.post(this.BASE_URL, value);
    };
    TeacherService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], TeacherService);
    return TeacherService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\TypeScript\HandsOnDay1\myapp\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map