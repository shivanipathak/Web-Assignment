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
//fetches all the students from the student table
function getAllStudents() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            return yield db_1.Student.findAll();
        }
        catch (err) {
            console.error(err);
        }
    });
}
exports.getAllStudents = getAllStudents;
function getStudentBatches(studentid) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            return yield db_1.Batch.findAll({
                include: [{
                        model: db_1.Student,
                        through: {
                            attributes: ['studentId', 'batchId']
                        },
                        where: { id: studentid }
                    }]
            });
        }
        catch (err) {
            console.error(err);
        }
    });
}
exports.getStudentBatches = getStudentBatches;
// /courses/:id/batches/:id/students
function getStudentsWithBatchID(courseid, batchid) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            return yield db_1.Student.findAll({
                include: [{
                        model: db_1.Batch,
                        through: {
                            attributes: ['studentId', 'batchId']
                        },
                        where: {
                            id: batchid,
                            courseId: courseid
                        }
                    }]
            });
        }
        catch (err) {
            console.error(err);
        }
    });
}
exports.getStudentsWithBatchID = getStudentsWithBatchID;
//fetches the particular student according to the student id
function getStudent(studentId) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            return yield db_1.Student.findAll({
                where: {
                    id: studentId
                }
            });
        }
        catch (err) {
            console.error(err);
        }
    });
}
exports.getStudent = getStudent;
function addInMappingTable(studentid, batchId) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const newCourse = yield db_1.MappingBatchStudent.create({ studentId: studentid, batchId: batchId });
        }
        catch (err) {
            console.error(err);
        }
    });
}
exports.addInMappingTable = addInMappingTable;
//add a student to student table
function addStudent(studentname) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const newCourse = yield db_1.Student.create({ name: studentname });
        }
        catch (err) {
            console.error(err);
        }
    });
}
exports.addStudent = addStudent;
