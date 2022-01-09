import React from 'react';
import HomePage from './pages/HomePage/HomePage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import ProductActionPage from './pages/ProductActionPage/ProductActionPage';
import ProductListPage from './pages/ProductListPage/ProductListPage';

const routes = [
    {
        path: '/',
        main: <HomePage />
    },
    {
        path: '/product-list',
        main: <ProductListPage />
    },
    {
        path: '/product/add',
        main: <ProductActionPage />
    },
    {
        path: '/product/:id/edit',
        main: <ProductActionPage />
    },
    {
        path: '*',
        main: <NotFoundPage />
    }
];

export default routes;