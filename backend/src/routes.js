'use strict';
import express from 'express';
import * as Class from './controller/class';
const routes = express.Router({});

routes.get('/class', Class.getClass);
routes.get('/student', Class.getStudent);
routes.get('/teacher', Class.getTeacher);

routes.post('/class', Class.insertClass);
routes.post('/student', Class.insertStudent);
routes.post('/teacher', Class.insertTeacher);

routes.put('/class', Class.updateClass);
routes.put('/student', Class.updateStudent);
routes.put('/teacher', Class.updateTeacher);


routes.delete('/class', Class.deleteClass);
routes.delete('/student', Class.deleteStudent);
routes.delete('/teacher', Class.deleteTeacher);

export default routes;