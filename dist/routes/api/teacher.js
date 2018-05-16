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
const database = __importStar(require("../databaseAccess/teacherDatabaseAccess"));
const express_1 = require("express");
const route = express_1.Router();
route.get('/', (req, res) => {
    database.getAllTeachers().then((teachers) => {
        res.send(teachers);
    });
});
route.get('/:id', (req, res) => {
    database.getParticularTeacher(parseInt(req.params.id)).then((teacher) => {
        res.send(teacher);
    });
});
route.get('/:teacherid/batches', (req, res) => {
    database.teachersFromBatches(parseInt(req.params.teacherid)).then((teachers) => {
        res.send(teachers);
    });
});
//adds teacher to the teacher table
route.post('/', (req, res) => {
    database.addTeacher(req.body.name, req.body.subjectId);
});
exports.default = route;
