import Sequelize from 'sequelize' 
//import * as database from '../databaseAccess/courseDatabaseAccess'
import * as database from '../databaseAccess/teacherDatabaseAccess'
import express ,{Router}from 'express'


const route:Router = Router()

route.get('/', (req, res) => {
database.getAllTeachers().then((teachers:any)=>{   
    res.send(teachers)
})
})

route.get('/:id', (req, res) => {
    database.getParticularTeacher(parseInt(req.params.id)).then((teacher:any)=>{   
        res.send(teacher)
    })
    })

route.get('/:teacherid/batches',(req,res)=>{
    database.teachersFromBatches(parseInt(req.params.teacherid)).then((teachers:any)=>{
        res.send(teachers)
    })
})
//adds teacher to the teacher table
route.post('/',(req,res)=>{
    database.addTeacher(req.body.name,req.body.subjectId)
})



export default route

