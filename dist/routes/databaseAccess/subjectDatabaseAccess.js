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
function getAllSubjects() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            return yield db_1.Subject.findAll();
        }
        catch (err) {
            console.error(err);
        }
    });
}
exports.getAllSubjects = getAllSubjects;
//fetch a particular subject according to the id
function getSubject(subjectid) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            return yield db_1.Subject.findAll({
                where: {
                    id: subjectid
                }
            });
        }
        catch (err) {
            console.error(err);
        }
    });
}
exports.getSubject = getSubject;
//add subject in the subject table
function addSubject(subjectname, courseId) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const newLecture = yield db_1.Subject.create({ name: subjectname, courseId: courseId });
        }
        catch (err) {
            console.error(err);
        }
    });
}
exports.addSubject = addSubject;
