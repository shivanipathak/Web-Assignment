"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = __importDefault(require("sequelize"));
//const Sequelize=require('sequelize')
const db = new sequelize_1.default('day1db', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql',
    pool: {
        min: 0,
        max: 5,
    }
});
exports.db = db;
const Course = db.define('course', {
    id: {
        type: sequelize_1.default.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: sequelize_1.default.STRING,
        allowNull: false,
    }
});
exports.Course = Course;
const Batch = db.define('batch', {
    id: {
        type: sequelize_1.default.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: sequelize_1.default.STRING,
        allowNull: false
    }
});
exports.Batch = Batch;
const Teacher = db.define('teacher', {
    id: {
        type: sequelize_1.default.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: sequelize_1.default.STRING,
        allowNull: false
    }
});
exports.Teacher = Teacher;
const Student = db.define('student', {
    id: {
        type: sequelize_1.default.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: sequelize_1.default.STRING,
        allowNull: false
    }
});
exports.Student = Student;
const Lecture = db.define('lecture', {
    id: {
        type: sequelize_1.default.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: sequelize_1.default.STRING,
        allowNull: false
    }
});
exports.Lecture = Lecture;
const Subject = db.define('subject', {
    id: {
        type: sequelize_1.default.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: sequelize_1.default.STRING,
        allowNull: false
    }
});
exports.Subject = Subject;
const MappingBatchStudent = db.define('mappings', {});
exports.MappingBatchStudent = MappingBatchStudent;
//Batch.belongsTo(Course)
Subject.belongsTo(Course);
Teacher.belongsTo(Subject);
Lecture.belongsTo(Batch);
Lecture.belongsTo(Subject);
Course.hasMany(Batch);
Batch.belongsToMany(Student, { through: 'mappings' });
Student.belongsToMany(Batch, { through: 'mappings' });
//Batch.belongsTo(Student)
//Student.belongsTo(Batch)
db.sync().then(() => console.log('database created'))
    .catch((err) => {
    console.error('Error creating database');
});
