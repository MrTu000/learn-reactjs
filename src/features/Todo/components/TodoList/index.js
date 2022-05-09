import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import './styles.scss';

TodoList.propTypes = {
    TodoList: PropTypes.array,
    onTodoClick: PropTypes.func,
};

TodoList.defaultProps = {
    TodoList: [],
    onTodoClick: null,
}

function TodoList({ TodoList, onTodoClick }) {
    const handelClick = (index) => {
        if (!onTodoClick) return

        onTodoClick(index)
    }

    return (
        <ul className="TodoList">
            {TodoList.map((todo, index) => (
                <li
                    key={todo.id}
                    className={classnames({
                        'todo-item': true,
                        completed: todo.status === 'completed'
                    })}
                    onClick={() => handelClick(index)}
                >
                    {todo.title}
                </li>
            ))}
        </ul>
    );
}

export default TodoList;