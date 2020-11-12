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

export default [
    {path: '/', key: 'home', component: Category, exact: true},
    {path: '/category/student', key: 'home', component: Category, exact: true},
    {path: '/category/class', key: 'class', component: Class, exact: true},
    {path: '/category/teacher', key: 'teacher', component: Teacher, exact: true},
];