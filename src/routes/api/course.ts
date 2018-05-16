import Sequelize from 'sequelize' 
import * as database from '../databaseAccess/courseDatabaseAccess'
import * as database1 from '../databaseAccess/batchDatabaseAccess'
import * as database2 from '../databaseAccess/lectureDatabaseAccess'
import * as database3 from '../databaseAccess/studentDatabaseAccess'
import * as database4 from '../databaseAccess/teacherDatabaseAccess'

import express ,{Router}from 'express'


const route:Router = Router()
route.get('/', (req, res) => {
database.getAllCourses().then((courses:any)=>{   
    res.send(courses)
})
})

route.get('/:id', (req, res) => {
    database.getCourses(parseInt(req.params.id)).then((courses:any)=>{
        //console.log(filteredproducts.length)
        res.send(courses)
    })

})

route.get('/:id/batches',(req,res)=>{
    database1.getAllBatchesAccordingToCourse(parseInt(req.params.id)).then((batches:any)=>{
        res.send(batches)
    })
})

//courses/:id/batches/:id
route.get('/:courseid/batches/:batchid',(req,res)=>{
    database1.getBatchesAccordingToCourse(parseInt(req.params.courseid),parseInt(req.params.batchid)).then((
        particularBatches:any)=>{
            res.send(particularBatches)
        })
})

//courses/:id/batches/:id/lectures
route.get('/:courseid/batches/:batchid/lectures',(req,res)=>{
    database2.getAllLecturesAccordingToBatches(parseInt(req.params.courseid),parseInt(req.params.courseid))
    .then((lectures:any)=>{
        res.send(lectures)
    })
})

//courses/:id/batches/:id/lectures/:id
route.get('/:courseid/batches/:batchid/lectures/:lectureid',(req,res)=>{
    database2.getParticularLecturesAccordingToBatches(parseInt(req.params.courseid),parseInt(req.params.courseid),parseInt(req.params.lectureid))
    .then((lectures:any)=>{
        res.send(lectures)
    })
})

//to get all the students having corresponding batchid
route.get('/:courseid/batches/:batchid/students',(req,res)=>{
    database3.getStudentsWithBatchID(parseInt(req.params.courseid),parseInt(req.params.batchid)).then((students:any)=>{
        res.send(students)
    })

})

route.get('/:courseid/batches/:batchid/teachers',(req,res)=>{
    database4.getTeachersAccordingToBatches(parseInt(req.params.courseid),parseInt(req.params.batchid)).then((teachers:any)=>{
        res.send(teachers)
    })

})
//add course in the course table
route.post('/',(req,res)=>{
    database.addCourse(req.body.name)
})

//add batch in batch table
route.post('/:courseid/batches',(req,res)=>{
    database1.addBatch(req.params.courseid,req.body.name)
})


//add lecture in lecture table
route.post('/:courseid/batches/:batchid/lectures',(req,res)=>{
    database2.addLecture(req.body.name,req.params.batchid,req.body.subjectId)
})
export default route
