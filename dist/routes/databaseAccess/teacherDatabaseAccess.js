"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = require("../../db");
//fetches all the lectures from the lecture table
// teachers
function getAllTeachers() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            return yield db_1.Teacher.findAll();
        }
        catch (err) {
            console.error(err);
        }
    });
}
exports.getAllTeachers = getAllTeachers;
// teachers/:id 
function getParticularTeacher(teacherid) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            return yield db_1.Teacher.findAll({
                where: {
                    id: teacherid
                }
            });
        }
        catch (err) {
            console.error(err);
        }
    });
}
exports.getParticularTeacher = getParticularTeacher;
function teachersFromBatches(teacherid) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield db_1.Teacher.findAll({
            include: [{
                    model: db_1.Subject,
                    include: [{
                            model: db_1.Course,
                            include: [{
                                    model: db_1.Batch
                                }]
                        }]
                }],
            where: {
                id: teacherid
            }
        });
    });
}
exports.teachersFromBatches = teachersFromBatches;
// /courses/:id/batches/:id/students
function getTeachersAccordingToBatches(courseid, batchid) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            return yield db_1.Teacher.findAll({
                include: [{
                        model: db_1.Subject,
                        where: { courseId: courseid },
                        include: [{
                                model: db_1.Course,
                                where: { id: courseid },
                                include: [{
                                        model: db_1.Batch,
                                        where: { id: batchid },
                                    }]
                            }]
                    }],
            });
        }
        catch (err) {
        }
    });
}
exports.getTeachersAccordingToBatches = getTeachersAccordingToBatches;
//subjects/:id/teachers 
//get all the teachers related to a subject
function getTeachersAccordingToSubject(subjectid) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            return yield db_1.Teacher.findAll({
                where: {
                    subjectId: subjectid
                }
            });
        }
        catch (err) {
            console.error(err);
        }
    });
}
exports.getTeachersAccordingToSubject = getTeachersAccordingToSubject;
//add Teacher in the Teacher table
function addTeacher(teachername, subjectId) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const newLecture = yield db_1.Teacher.create({ name: teachername, subjectId: subjectId });
        }
        catch (err) {
            console.error(err);
        }
    });
}
exports.addTeacher = addTeacher;
