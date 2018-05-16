import { Teacher, Subject, Course, Batch } from '../../db'
import { Sequelize } from 'sequelize'

//fetches all the lectures from the lecture table
// teachers
async function getAllTeachers() {

    try {
        return await Teacher.findAll()
    }
    catch (err) {
        console.error(err)
    }
}

// teachers/:id 
async function getParticularTeacher(teacherid: number) {

    try {
        return await Teacher.findAll({
            where: {
                id: teacherid
            }
        })
    }
    catch (err) {
        console.error(err)
    }
}

async function teachersFromBatches(teacherid:number)
{
    return await Teacher.findAll({
        include:[{
            model:Subject,

            include:[{
                model:Course,

                include:[{
                    model:Batch
                }]
            }]
        }],
        where:{
            id:teacherid
        }
    })

}

// /courses/:id/batches/:id/students
async function getTeachersAccordingToBatches(courseid: number, batchid: number) {

    try {
        return await Teacher.findAll({
            include:  [{
                model: Subject,
                where:{courseId:courseid},
                include: [{
                    model: Course,
                    where: { id: courseid },
                    include: [{
                        model: Batch,
                        where: { id: batchid },
                    }]
                }]
            }],
        })

    }
    catch (err) {

    }
}

//subjects/:id/teachers 
//get all the teachers related to a subject
async function getTeachersAccordingToSubject(subjectid: number) {

    try {
        return await Teacher.findAll({

            where: {
                subjectId: subjectid
            }
        })
    }
    catch (err) {
        console.error(err)
    }
}

//add Teacher in the Teacher table
async function addTeacher(teachername: string, subjectId: number) {

    try {
        const newLecture = await Teacher.create({ name: teachername, subjectId: subjectId })
    } catch (err) {
        console.error(err)
    }
}
export {
    getAllTeachers, addTeacher, getParticularTeacher, getTeachersAccordingToBatches,
    getTeachersAccordingToSubject,teachersFromBatches
}