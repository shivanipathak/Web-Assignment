import Sequelize from 'sequelize'
//const Sequelize=require('sequelize')
const db= new Sequelize('day1db','root','root',{
    host:'localhost',
    dialect:'mysql',
    pool:{
        min:0,
        max:5,
    }
})

const Course=db.define('course',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        primaryKey: true
    },
    name:{
        type:Sequelize.STRING,
        allowNull:false,
    }

})

const Batch=db.define('batch',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    name:{
        type:Sequelize.STRING,
        allowNull:false

    }
})

const Teacher=db.define('teacher',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },

    name:{
        type:Sequelize.STRING,
        allowNull:false

    }
})
const Student = db.define('student', {
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },

    name:{
        type:Sequelize.STRING,
        allowNull:false

    }
    
})
const Lecture = db.define('lecture', {
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },

    name:{
        type:Sequelize.STRING,
        allowNull:false

    }
    
})
const Subject = db.define('subject', {
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },

    name:{
        type:Sequelize.STRING,
        allowNull:false

    }
    
})
const MappingBatchStudent=db.define('mappings',{
    
})

//Batch.belongsTo(Course)
Subject.belongsTo(Course)
Teacher.belongsTo(Subject)
Lecture.belongsTo(Batch)
Lecture.belongsTo(Subject)
Course.hasMany(Batch)
Batch.belongsToMany(Student,{through:'mappings'})
Student.belongsToMany(Batch,{through:'mappings'})
//Batch.belongsTo(Student)
//Student.belongsTo(Batch)

db.sync().then(()=>console.log('database created'))
    .catch((err)=>{
        console.error('Error creating database')

    })

export {
    db,Course,Batch,Teacher,Student,Lecture,Subject,MappingBatchStudent
}
    
