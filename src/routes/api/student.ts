import Sequelize from 'sequelize' 
//import * as database from '../databaseAccess/courseDatabaseAccess'
import * as database from '../databaseAccess/studentDatabaseAccess'
import * as database1 from '../databaseAccess/BatchDatabaseAccess'
import express ,{Router}from 'express'


const route:Router = Router()

//getAllStudents
// /students
route.get('/', (req, res) => {
database.getAllStudents().then((students:any)=>{   
    res.send(students)
})
})

//get Particular Students according to the id
// /students/:id
route.get('/:id', (req, res) => {
    database.getStudent(parseInt(req.params.id)).then((student:any)=>{   
        res.send(student)
    })
    })

// get batches of a particular student   
    route.get('/:studentId/batches',(req,res)=>{
        database.getStudentBatches(parseInt(req.params.studentId)).then((batches:any)=>{
            res.send(batches)
        })

    })

//posting the data in the mapping table
route.post('/:studentId/batches',(req,res)=>{
    database.addInMappingTable(parseInt(req.params.studentId),parseInt(req.body.batchId))
})
    

//add student in the student table
route.post('/',(req,res)=>{
    database.addStudent(req.body.name)
})

export default route

