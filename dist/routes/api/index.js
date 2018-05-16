"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const route = express_1.Router();
const course_1 = __importDefault(require("./course"));
const batch_1 = __importDefault(require("./batch"));
const lecture_1 = __importDefault(require("./lecture"));
const subject_1 = __importDefault(require("./subject"));
const teacher_1 = __importDefault(require("./teacher"));
const student_1 = __importDefault(require("./student"));
// import carts from './cart'
//const route = require('express').Router() 
route.use('/courses', course_1.default);
route.use('/batches', batch_1.default);
route.use('/lectures', lecture_1.default);
route.use('/subjects', subject_1.default);
route.use('/teachers', teacher_1.default);
route.use('/students', student_1.default);
// route.use('/products',products)
// route.use('/carts',carts) 
exports.default = route;
