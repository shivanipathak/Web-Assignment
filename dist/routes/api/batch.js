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
const database = __importStar(require("../databaseAccess/batchDatabaseAccess"));
const express_1 = require("express");
const route = express_1.Router();
route.get('/', (req, res) => {
    database.getAllBatches().then((batches) => {
        res.send(batches);
    });
});
// route.post('/',(req,res)=>{
//     database.addBatch(req.body.name,parseInt(req.body.courseId))
// })
exports.default = route;
