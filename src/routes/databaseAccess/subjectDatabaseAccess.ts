import {Subject,Teacher} from '../../db'  
import {Sequelize} from 'sequelize' 

//fetches all the lectures from the lecture table
async function getAllSubjects()
{
    
    try
    {
        return await Subject.findAll()
    }
    catch(err)
    {
        console.error(err)
    }
}

//fetch a particular subject according to the id
async function getSubject(subjectid:number)
{
    
    try
    {
        return await Subject.findAll({
            where:{
                id:subjectid
            }
        })
    }
    catch(err)
    {
        console.error(err)
    }
}

//add subject in the subject table
async function addSubject(subjectname:string,courseId:number)
{
    
    try
    {  
        const newLecture= await Subject.create({name:subjectname,courseId:courseId})
    }    catch(err)
    {
        console.error(err)
    }
}





export{getAllSubjects,addSubject,getSubject}