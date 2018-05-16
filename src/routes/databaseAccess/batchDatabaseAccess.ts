import {Batch} from '../../db'  
import {Sequelize} from 'sequelize' 

// /batches
async function getAllBatches()
{
    try
    {
        return await Batch.findAll()
    }
    catch(err)
    {
        console.error(err)
    }

}

// /courses/:id/batches
async function getAllBatchesAccordingToCourse(courseId:number)
{
    return await Batch.findAll({
        where:{
            courseId:courseId
        }
    })

}
async function getBatchesAccordingToCourse(courseId:number,batchId:number)
{
    return await Batch.findAll({
        where:{
            
            id:batchId,
            courseId:courseId

        }
    })

}

async function addBatch(batchname:string,courseId:number){
    try
    {  
        const newBatch= await Batch.create({name:batchname,courseId:courseId})
    }    catch(err)
    {
        console.error(err)
    }
}


export {getAllBatchesAccordingToCourse,getAllBatches,getBatchesAccordingToCourse,addBatch}