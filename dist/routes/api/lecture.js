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
const database = __importStar(require("../databaseAccess/LectureDatabaseAccess"));
const express_1 = require("express");
const route = express_1.Router();
route.get('/', (req, res) => {
    database.getAllLectures().then((lectures) => {
        res.send(lectures);
    });
});
// route.post('/',(req,res)=>{
//     database.addLecture(req.body.name,req.body.batchId,req.body.subjectId)
// })
exports.default = route;
