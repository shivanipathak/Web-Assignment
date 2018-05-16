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
// /batches
function getAllBatches() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            return yield db_1.Batch.findAll();
        }
        catch (err) {
            console.error(err);
        }
    });
}
exports.getAllBatches = getAllBatches;
// /courses/:id/batches
function getAllBatchesAccordingToCourse(courseId) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield db_1.Batch.findAll({
            where: {
                courseId: courseId
            }
        });
    });
}
exports.getAllBatchesAccordingToCourse = getAllBatchesAccordingToCourse;
function getBatchesAccordingToCourse(courseId, batchId) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield db_1.Batch.findAll({
            where: {
                id: batchId,
                courseId: courseId
            }
        });
    });
}
exports.getBatchesAccordingToCourse = getBatchesAccordingToCourse;
function addBatch(batchname, courseId) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const newBatch = yield db_1.Batch.create({ name: batchname, courseId: courseId });
        }
        catch (err) {
            console.error(err);
        }
    });
}
exports.addBatch = addBatch;
