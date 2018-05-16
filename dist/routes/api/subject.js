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
const database = __importStar(require("../databaseAccess/subjectDatabaseAccess"));
const database1 = __importStar(require("../databaseAccess/TeacherDatabaseAccess"));
const express_1 = require("express");
const route = express_1.Router();
route.get('/', (req, res) => {
    database.getAllSubjects().then((students) => {
        res.send(students);
    });
});
route.get('/:id', (req, res) => {
    database.getSubject(parseInt(req.params.id)).then((student) => {
        res.send(student);
    });
});
///subjects/:id/teachers
route.get('/:id/teachers', (req, res) => {
    database1.getTeachersAccordingToSubject(parseInt(req.params.id)).then((teacher) => {
        res.send(teacher);
    });
});
route.post('/', (req, res) => {
    database.addSubject(req.body.name, req.body.courseId);
});
route.post('/:id/teachers', (req, res) => {
    database1.addTeacher(req.body.name, parseInt(req.params.id));
});
exports.default = route;
