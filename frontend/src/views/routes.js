import React from 'react';
import Loadable from 'react-loadable';
import LoaderActive from './components/common/loader';

function loading() {
    return (<LoaderActive/>)
}

const Category = Loadable({
    loader: () => import('./components/test/test'),
    loading: loading
});

export default [
    {path: '/category', key: 'home', component: Category, exact: true},
];