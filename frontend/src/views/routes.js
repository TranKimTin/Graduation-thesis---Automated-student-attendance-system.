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

export default [
    {path: '/', key: 'home', component: Category, exact: true},
    {path: '/category/student', key: 'home', component: Category, exact: true},
];