import { useState } from 'react';
import PropTypes from 'prop-types';
import { Routes, Route } from 'react-router-dom';
import TodoLists from './pages/TodoList';
import Detail from './pages/Detail';

TodoFeature.propTypes = {

};

function TodoFeature(props) {
    return (
        <>
            <h1>tesst</h1>
            <Routes>
                <Route path='/' element={<TodoLists />} />
                <Route path={`/:todoId`} element={<Detail />} />
            </Routes>
        </>
    );
}

export default TodoFeature;