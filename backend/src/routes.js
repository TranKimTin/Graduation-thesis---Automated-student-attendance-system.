'use strict';
import express from 'express';
import * as Category from './controller/category';
import * as Configure from './controller/configure';
import * as User from './controller/user';
import * as Attendance from './controller/attendance';

const routes = express.Router({});
const { requireToken, requireRoleTeacher, requireRoleAdmin } = User;

routes.get('/category/class', requireToken, requireRoleAdmin, Category.getClass);
routes.get('/category/student', requireToken, requireRoleAdmin, Category.getStudent);
routes.get('/category/teacher', requireToken, requireRoleAdmin, Category.getTeacher);
routes.get('/category/subject', requireToken, requireRoleAdmin, Category.getSubject);
routes.get('/category/year', requireToken, requireRoleAdmin, Category.getYear);
routes.get('/category/semester', requireToken, requireRoleAdmin, Category.getSemester);

routes.get('/configure/section-class', requireToken, requireRoleAdmin, Configure.getSectionClass);
routes.get('/configure/study', requireToken, requireRoleAdmin, Configure.getStudy);
routes.get('/configure/teach', requireToken, requireRoleAdmin, Configure.getTeach);

routes.get('/attendance/option-section-class', requireToken, Attendance.getOptionSectionClass);
routes.get('/attendance/:id_section_class', requireToken, Attendance.getAttendance);
routes.get('/attendance/android/section-class', requireToken, requireRoleTeacher, Attendance.getCurrentSectionClass)

routes.get('/system/user', requireToken, requireRoleAdmin, User.getUser);

routes.post('/category/class', requireToken, requireRoleAdmin, Category.insertClass);
routes.post('/category/student', requireToken, requireRoleAdmin, Category.insertStudent);
routes.post('/category/teacher', requireToken, requireRoleAdmin, Category.insertTeacher);
routes.post('/category/subject', requireToken, requireRoleAdmin, Category.insertSubject);
routes.post('/category/year', requireToken, requireRoleAdmin, Category.insertYear);
routes.post('/category/semester', requireToken, requireRoleAdmin, Category.insertSemester);

routes.post('/configure/section-class', requireToken, requireRoleAdmin, Configure.insertSectionClass);
routes.post('/configure/import-section-class', requireToken, requireRoleAdmin, Configure.importSectionClass);
routes.post('/configure/study', requireToken, requireRoleAdmin, Configure.insertStudy);
routes.post('/configure/teach', requireToken, requireRoleAdmin, Configure.insertTeach);

routes.post('/login', User.getToken);
routes.post('/logout', requireToken, User.logout);

routes.post('/attendance/:id_student/:id_schedule', requireToken, requireRoleTeacher, Attendance.attendance);

routes.post('/system/user', requireToken, requireRoleAdmin, User.insertUser);

routes.put('/category/class', requireToken, requireRoleAdmin, Category.updateClass);
routes.put('/category/student', requireToken, requireRoleAdmin, Category.updateStudent);
routes.put('/category/teacher', requireToken, requireRoleAdmin, Category.updateTeacher);
routes.put('/category/subject', requireToken, requireRoleAdmin, Category.updateSubject);
routes.put('/category/year', requireToken, requireRoleAdmin, Category.updateYear);
routes.put('/category/semester', requireToken, requireRoleAdmin, Category.updateSemester);

routes.put('/configure/section-class', requireToken, requireRoleAdmin, Configure.updateSectionClass);
routes.put('/configure/study', requireToken, requireRoleAdmin, Configure.updateStudy);
routes.put('/configure/teach', requireToken, requireRoleAdmin, Configure.updateTeach);

routes.put('/system/user', requireToken, requireRoleAdmin, User.updateUser);

routes.delete('/category/class', requireToken, requireRoleAdmin, Category.deleteClass);
routes.delete('/category/student', requireToken, requireRoleAdmin, Category.deleteStudent);
routes.delete('/category/teacher', requireToken, requireRoleAdmin, Category.deleteTeacher);
routes.delete('/category/subject', requireToken, requireRoleAdmin, Category.deleteSubject);
routes.delete('/category/year', requireToken, requireRoleAdmin, Category.deleteYear);
routes.delete('/category/semester', requireToken, requireRoleAdmin, Category.deleteSemester);

routes.delete('/configure/section-class', requireToken, requireRoleAdmin, Configure.deleteSectionClass);
routes.delete('/configure/study', requireToken, requireRoleAdmin, Configure.deleteStudy);
routes.delete('/configure/teach', requireToken, requireRoleAdmin, Configure.deleteTeach);

routes.delete('/system/user', requireToken, requireRoleAdmin, User.deleteUser);

export default routes;