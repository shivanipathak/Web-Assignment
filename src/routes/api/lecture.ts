import Sequelize from 'sequelize' 
//import * as database from '../databaseAccess/courseDatabaseAccess'
import * as database from '../databaseAccess/LectureDatabaseAccess'
import express ,{Router}from 'express'


const route:Router = Router()

route.get('/', (req, res) => {
database.getAllLectures().then((lectures:any)=>{   
    res.send(lectures)
})
})


// route.post('/',(req,res)=>{
//     database.addLecture(req.body.name,req.body.batchId,req.body.subjectId)
// })

export default route
