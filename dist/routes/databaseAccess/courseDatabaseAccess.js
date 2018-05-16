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
function getAllCourses() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            return yield db_1.Course.findAll();
        }
        catch (err) {
            console.error(err);
        }
    });
}
exports.getAllCourses = getAllCourses;
// returns a course specified to a id
function getCourses(id) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            return yield db_1.Course.findAll({
                where: {
                    Id: id
                }
            });
        }
        catch (err) {
            console.error(err);
        }
    });
}
exports.getCourses = getCourses;
//add the course to the database
function addCourse(coursename) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const newCourse = yield db_1.Course.create({ name: coursename });
        }
        catch (err) {
            console.error(err);
        }
    });
}
exports.addCourse = addCourse;
