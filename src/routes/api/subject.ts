import Sequelize from 'sequelize' 
//import * as database from '../databaseAccess/courseDatabaseAccess'
import * as database from '../databaseAccess/subjectDatabaseAccess'
import * as database1 from '../databaseAccess/TeacherDatabaseAccess'
import express ,{Router}from 'express'


const route:Router = Router()

route.get('/', (req, res) => {
database.getAllSubjects().then((students:any)=>{   
    res.send(students)
})
})

route.get('/:id', (req, res) => {
    database.getSubject(parseInt(req.params.id)).then((student:any)=>{   
        res.send(student)
    })
    })

///subjects/:id/teachers
route.get('/:id/teachers',(req,res)=>{
    database1.getTeachersAccordingToSubject(parseInt(req.params.id)).then((teacher:any)=>{
        res.send(teacher)
    })
})


route.post('/',(req,res)=>{
    database.addSubject(req.body.name,req.body.courseId)
})

route.post('/:id/teachers',(req,res)=>{
    database1.addTeacher(req.body.name,parseInt(req.params.id))
})

export default route

