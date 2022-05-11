import { useState } from 'react';
import PropTypes from 'prop-types';
import { Routes, Route } from 'react-router-dom';
import ListPage from './pages/ListPage';
import DetailPage from './pages/DetailPage';

TodoFeature.propTypes = {

};

function TodoFeature(props) {
    return (
        <>
            <h1>tesst</h1>
            <Routes>
                <Route path='/' element={<ListPage />} />
                <Route path={`/:todoId`} element={<DetailPage />} />
            </Routes>
        </>
    );
}

export default TodoFeature;