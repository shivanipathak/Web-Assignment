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
function getAllLectures() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            return yield db_1.Lecture.findAll();
        }
        catch (err) {
            console.error(err);
        }
    });
}
exports.getAllLectures = getAllLectures;
function getAllLecturesAccordingToBatches(courseid, batchid) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            return yield db_1.Lecture.findAll({
                include: [{
                        model: db_1.Batch,
                        where: {
                            courseId: courseid
                        }
                    }],
                where: { batchId: batchid }
            });
        }
        catch (err) {
            console.error(err);
        }
    });
}
exports.getAllLecturesAccordingToBatches = getAllLecturesAccordingToBatches;
function getParticularLecturesAccordingToBatches(courseid, batchid, lectureid) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            return yield db_1.Lecture.findAll({
                include: [{
                        model: db_1.Batch,
                        where: {
                            courseId: courseid
                        }
                    }],
                where: { batchId: batchid,
                    id: lectureid }
            });
        }
        catch (err) {
            console.error(err);
        }
    });
}
exports.getParticularLecturesAccordingToBatches = getParticularLecturesAccordingToBatches;
//add a lecture to lecture table
function addLecture(lecturename, batchid, subjectid) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const newLecture = yield db_1.Lecture.create({ name: lecturename, batchId: batchid, subjectId: subjectid });
        }
        catch (err) {
            console.error(err);
        }
    });
}
exports.addLecture = addLecture;
