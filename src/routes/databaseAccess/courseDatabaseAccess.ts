import {Course} from '../../db'  
import {Sequelize} from 'sequelize' 

async function getAllCourses()
{
    
    try
    {
        return await Course.findAll()
    }
    catch(err)
    {
        console.error(err)
    }
}

// returns a course specified to a id
async function getCourses(id:number)
{
    try
    {
        return await Course.findAll({
            where:{
                Id:id  
            }
            
        })

    }
    catch(err)
    {
        console.error(err)

    }
}

//add the course to the database
async function addCourse(coursename:string){
    try
    {  
        const newCourse= await Course.create({name:coursename})
    }    catch(err)
    {
        console.error(err)
    }
}

export {getAllCourses,getCourses,addCourse}

