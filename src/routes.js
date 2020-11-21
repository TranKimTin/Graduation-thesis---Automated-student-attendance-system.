'use strict';
import express from 'express';
import * as Category from './controller/category';
import * as Configure from './controller/configure';
const routes = express.Router({});

routes.get('/category/class', Category.getClass);
routes.get('/category/student', Category.getStudent);
routes.get('/category/teacher', Category.getTeacher);
routes.get('/category/subject', Category.getSubject);
routes.get('/category/year', Category.getYear);
routes.get('/category/semester', Category.getSemester);

routes.get('/configure/section-class', Configure.getSectionClass);
routes.get('/configure/study', Configure.getStudy);

routes.post('/category/class', Category.insertClass);
routes.post('/category/student', Category.insertStudent);
routes.post('/category/teacher', Category.insertTeacher);
routes.post('/category/subject', Category.insertSubject);
routes.post('/category/year', Category.insertYear);
routes.post('/category/semester', Category.insertSemester);

routes.post('/configure/section-class', Configure.insertSectionClass);
routes.post('/configure/study', Configure.insertStudy);

routes.put('/category/class', Category.updateClass);
routes.put('/category/student', Category.updateStudent);
routes.put('/category/teacher', Category.updateTeacher);
routes.put('/category/subject', Category.updateSubject);
routes.put('/category/year', Category.updateYear);
routes.put('/category/semester', Category.updateSemester);

routes.put('/configure/section-class', Configure.updateSectionClass);

routes.delete('/category/class', Category.deleteClass);
routes.delete('/category/student', Category.deleteStudent);
routes.delete('/category/teacher', Category.deleteTeacher);
routes.delete('/category/subject', Category.deleteSubject);
routes.delete('/category/year', Category.deleteYear);
routes.delete('/category/semester', Category.deleteSemester);

routes.delete('/configure/section-class', Configure.deleteSectionClass);

export default routes;