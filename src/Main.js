import React from 'react';
import {Routes, Route, Navigate} from 'react-router-dom';
import './index.css';

import home from './pages/home';
import tt_app from './pages/tt_app';

const Main = () => {
    return (
        <Routes>
            <Route path='/' element={home()}></Route>
            <Route path='/home' element={home()}></Route>
            <Route path='/tt_app' element={tt_app()}></Route>
            <Route path='*' element={<Navigate to='/home' />} />
        </Routes>
    );
}

export default Main;