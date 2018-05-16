"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
//import * as database from '../databaseAccess/courseDatabaseAccess'
const database = __importStar(require("../databaseAccess/studentDatabaseAccess"));
const express_1 = require("express");
const route = express_1.Router();
//getAllStudents
// /students
route.get('/', (req, res) => {
    database.getAllStudents().then((students) => {
        res.send(students);
    });
});
//get Particular Students according to the id
// /students/:id
route.get('/:id', (req, res) => {
    database.getStudent(parseInt(req.params.id)).then((student) => {
        res.send(student);
    });
});
// get batches of a particular student   
route.get('/:studentId/batches', (req, res) => {
    database.getStudentBatches(parseInt(req.params.studentId)).then((batches) => {
        res.send(batches);
    });
});
//posting the data in the mapping table
route.post('/:studentId/batches', (req, res) => {
    database.addInMappingTable(parseInt(req.params.studentId), parseInt(req.body.batchId));
});
//add student in the student table
route.post('/', (req, res) => {
    database.addStudent(req.body.name);
});
exports.default = route;
