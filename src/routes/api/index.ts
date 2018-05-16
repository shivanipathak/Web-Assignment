import express ,{Router}from 'express'
const route:Router = Router()
import courses from'./course'
import batches from'./batch'
import lectures from'./lecture'
import subjects from'./subject'
import teachers from './teacher'
import students from './student'
// import carts from './cart'
//const route = require('express').Router() 

route.use('/courses',courses)
route.use('/batches',batches)
route.use('/lectures',lectures)
route.use('/subjects',subjects)
route.use('/teachers',teachers)
route.use('/students',students)
// route.use('/products',products)
// route.use('/carts',carts) 
export default route