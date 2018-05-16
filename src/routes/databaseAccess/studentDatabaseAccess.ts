import {Student,Batch,MappingBatchStudent} from '../../db'  
import {Sequelize} from 'sequelize' 

//fetches all the students from the student table
async function getAllStudents()
{
    
    try
    {
        return await Student.findAll()
    }
    catch(err)
    {
        console.error(err)
    }
}


async function getStudentBatches(studentid:number)
{
    try
    {
        return await Batch.findAll({
       
            include: [{
                model:Student,
                through: {
                    attributes: ['studentId', 'batchId']
                },
                where:{id:studentid}
              }]
        })
    }
    catch(err)
    {
        console.error(err)
    }

}


// /courses/:id/batches/:id/students
async function getStudentsWithBatchID(courseid:number,batchid:number)
{
    try
    {
        return await Student.findAll({
            include:[{
                model: Batch,
                through:{
                    attributes:['studentId','batchId']
                },
                where:
                {
                    id:batchid,
                    courseId:courseid
                }
            }]

        })

    }
    catch(err)
    {
        console.error(err)
    }
}

//fetches the particular student according to the student id
async function getStudent(studentId:number)
{
    
    try
    {
        return await Student.findAll({
            where:{
                id:studentId
            }
        })
    }
    catch(err)
    {
        console.error(err)
    }
}


async function addInMappingTable(studentid:number,batchId:number){
    try
    {  
        const newCourse= await MappingBatchStudent.create({studentId:studentid,batchId:batchId})
    }    catch(err)
    {
        console.error(err)
    }
}



//add a student to student table
async function addStudent(studentname:string){
    try
    {  
        const newCourse= await Student.create({name:studentname})
    }    catch(err)
    {
        console.error(err)
    }
}

export{getAllStudents,getStudent,addStudent,getStudentBatches,addInMappingTable,
    getStudentsWithBatchID}
