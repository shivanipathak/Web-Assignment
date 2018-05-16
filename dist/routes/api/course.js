"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const database = __importStar(require("../databaseAccess/courseDatabaseAccess"));
const database1 = __importStar(require("../databaseAccess/batchDatabaseAccess"));
const database2 = __importStar(require("../databaseAccess/lectureDatabaseAccess"));
const database3 = __importStar(require("../databaseAccess/studentDatabaseAccess"));
const database4 = __importStar(require("../databaseAccess/teacherDatabaseAccess"));
const express_1 = require("express");
const route = express_1.Router();
route.get('/', (req, res) => {
    database.getAllCourses().then((courses) => {
        res.send(courses);
    });
});
route.get('/:id', (req, res) => {
    database.getCourses(parseInt(req.params.id)).then((courses) => {
        //console.log(filteredproducts.length)
        res.send(courses);
    });
});
route.get('/:id/batches', (req, res) => {
    database1.getAllBatchesAccordingToCourse(parseInt(req.params.id)).then((batches) => {
        res.send(batches);
    });
});
//courses/:id/batches/:id
route.get('/:courseid/batches/:batchid', (req, res) => {
    database1.getBatchesAccordingToCourse(parseInt(req.params.courseid), parseInt(req.params.batchid)).then((particularBatches) => {
        res.send(particularBatches);
    });
});
//courses/:id/batches/:id/lectures
route.get('/:courseid/batches/:batchid/lectures', (req, res) => {
    database2.getAllLecturesAccordingToBatches(parseInt(req.params.courseid), parseInt(req.params.courseid))
        .then((lectures) => {
        res.send(lectures);
    });
});
//courses/:id/batches/:id/lectures/:id
route.get('/:courseid/batches/:batchid/lectures/:lectureid', (req, res) => {
    database2.getParticularLecturesAccordingToBatches(parseInt(req.params.courseid), parseInt(req.params.courseid), parseInt(req.params.lectureid))
        .then((lectures) => {
        res.send(lectures);
    });
});
//to get all the students having corresponding batchid
route.get('/:courseid/batches/:batchid/students', (req, res) => {
    database3.getStudentsWithBatchID(parseInt(req.params.courseid), parseInt(req.params.batchid)).then((students) => {
        res.send(students);
    });
});
route.get('/:courseid/batches/:batchid/teachers', (req, res) => {
    database4.getTeachersAccordingToBatches(parseInt(req.params.courseid), parseInt(req.params.batchid)).then((teachers) => {
        res.send(teachers);
    });
});
//add course in the course table
route.post('/', (req, res) => {
    database.addCourse(req.body.name);
});
//add batch in batch table
route.post('/:courseid/batches', (req, res) => {
    database1.addBatch(req.params.courseid, req.body.name);
});
//add lecture in lecture table
route.post('/:courseid/batches/:batchid/lectures', (req, res) => {
    database2.addLecture(req.body.name, req.params.batchid, req.body.subjectId);
});
exports.default = route;
