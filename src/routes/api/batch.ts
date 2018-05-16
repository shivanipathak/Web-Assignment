import Sequelize from 'sequelize' 
//import * as database from '../databaseAccess/courseDatabaseAccess'
import * as database from '../databaseAccess/batchDatabaseAccess'
import express ,{Router}from 'express'


const route:Router = Router()

route.get('/', (req, res) => {
database.getAllBatches().then((batches:any)=>{   
    res.send(batches)
})
})

// route.post('/',(req,res)=>{
//     database.addBatch(req.body.name,parseInt(req.body.courseId))
// })

export default route

