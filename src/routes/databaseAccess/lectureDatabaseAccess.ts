import {Lecture,Batch} from '../../db'  
import {Sequelize} from 'sequelize' 

//fetches all the lectures from the lecture table
async function getAllLectures()
{
    
    try
    {
        return await Lecture.findAll()
    }
    catch(err)
    {
        console.error(err)
    }
}

async function getAllLecturesAccordingToBatches(courseid:number,batchid:number)
{
    try
    {
        return await Lecture.findAll({
            include:[{
                model:Batch,
                where:{
                courseId:courseid
                }
                }],
                where: {batchId:batchid}
            
        })
    }
    catch(err)
    {
        console.error(err)
    }

}

async function getParticularLecturesAccordingToBatches(courseid:number,batchid:number,lectureid:number)
{
    try
    {
        return await Lecture.findAll({
            include:[{
                model:Batch,
                where:{
                courseId:courseid
                }
                }],
                where: {batchId:batchid,
                id:lectureid}
            
        })
    }
    catch(err)
    {
        console.error(err)
    }

}






//add a lecture to lecture table
async function addLecture(lecturename:string,batchid:number,subjectid:number){
    try
    {  
        const newLecture= await Lecture.create({name:lecturename,batchId:batchid,subjectId:subjectid})
    }    catch(err)
    {
        console.error(err)
    }
}

export{getAllLectures,addLecture,getAllLecturesAccordingToBatches,getParticularLecturesAccordingToBatches}
