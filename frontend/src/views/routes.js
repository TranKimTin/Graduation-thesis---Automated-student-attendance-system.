import React from 'react';
import Loadable from 'react-loadable';
import LoaderActive from './components/common/loader';

function loading() {
    return (<LoaderActive/>)
}

const Category = Loadable({
    loader: () => import('./components/category/student'),
    loading: loading
});

const Class = Loadable({
    loader: () => import('./components/category/class'),
    loading: loading
});

const Teacher = Loadable({
    loader: () => import('./components/category/teacher'),
    loading: loading
});

const Subject = Loadable({
    loader: () => import('./components/category/subject'),
    loading: loading
});

const Year = Loadable({
    loader: () => import('./components/category/year'),
    loading: loading
});

const Semester = Loadable({
    loader: () => import('./components/category/semester'),
    loading: loading
});

const SectionClass = Loadable({
    loader: () => import('./components/configure/section_class'),
    loading: loading
});

const Study = Loadable({
    loader: () => import('./components/configure/study'),
    loading: loading
});

const Teach = Loadable({
    loader: () => import('./components/configure/teach'),
    loading: loading
});

const Attendance = Loadable({
    loader: () => import('./components/attendance/attendance'),
    loading: loading
});

const User = Loadable({
    loader: () => import('./components/system/user'),
    loading: loading
});

export default [
    {path: '/', key: 'home', component: Attendance, exact: true},
    {path: '/category/student', key: 'home', component: Category, exact: true},
    {path: '/category', key: 'home', component: Category, exact: true},
    {path: '/category/class', key: 'class', component: Class, exact: true},
    {path: '/category/teacher', key: 'teacher', component: Teacher, exact: true},
    {path: '/category/subject', key: 'subject', component: Subject, exact: true},
    {path: '/category/year', key: 'year', component: Year, exact: true},
    {path: '/category/semester', key: 'semester', component: Semester, exact: true},
    {path: '/configure', key: 'configure', component: SectionClass, exact: true},
    {path: '/configure/section-class', key: 'section-class', component: SectionClass, exact: true},
    {path: '/configure/study', key: 'study', component: Study, exact: true},
    {path: '/configure/teach', key: 'teach', component: Teach, exact: true},
    {path: '/attendance', key: 'attendance', component: Attendance, exact: true},
    {path: '/system', key: 'system', component: User, exact: true},
    {path: '/system/user', key: 'user', component: User, exact: true},
];