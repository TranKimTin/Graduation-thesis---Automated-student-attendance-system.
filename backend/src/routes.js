'use strict';
import express from 'express';
import * as Category from './controller/category';
const routes = express.Router({});

routes.get('/class', Category.getClass);
routes.get('/student', Category.getStudent);
routes.get('/teacher', Category.getTeacher);
routes.get('/subject', Category.getSubject);
routes.get('/year', Category.getYear);
routes.get('/semester', Category.getSemester);

routes.post('/class', Category.insertClass);
routes.post('/student', Category.insertStudent);
routes.post('/teacher', Category.insertTeacher);
routes.post('/subject', Category.insertSubject);
routes.post('/year', Category.insertYear);
routes.post('/semester', Category.insertSemester);

routes.put('/class', Category.updateClass);
routes.put('/student', Category.updateStudent);
routes.put('/teacher', Category.updateTeacher);
routes.put('/subject', Category.updateSubject);
routes.put('/year', Category.updateYear);
routes.put('/semester', Category.updateSemester);

routes.delete('/class', Category.deleteClass);
routes.delete('/student', Category.deleteStudent);
routes.delete('/teacher', Category.deleteTeacher);
routes.delete('/subject', Category.deleteSubject);
routes.delete('/year', Category.deleteYear);
routes.delete('/semester', Category.deleteSemester);

export default routes;