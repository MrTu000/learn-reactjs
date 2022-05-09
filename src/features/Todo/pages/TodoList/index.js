import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import TodoList from "../../components/TodoList";
import { useLocation, useNavigate } from "react-router-dom";
import queryString from "query-string";

TodoLists.propTypes = {};

function TodoLists(props) {
    const todos = [
        {
            id: "1",
            title: "eat",
            status: "new",
        },
        {
            id: "2",
            title: "sleep",
            status: "completed",
        },
        {
            id: "3",
            title: "code",
            status: "new",
        },
    ];

    const navigate = useNavigate();
    const location = useLocation();
    const [todoList, setTodoList] = useState(todos);
    const [filteredStatus, setFilteredStatus] = useState(() => {
        const params = queryString.parse(location.search);
        return params.status || "all";
    });

    useEffect(() => {
        const params = queryString.parse(location.search);
        setFilteredStatus(params.status);
    }, [location.search]);

    const handelClick = (index) => {
        const newTodos = [...todoList];

        newTodos[index] = {
            ...newTodos[index],
            status: newTodos[index].status === "completed" ? "new" : "completed",
        };
        setTodoList(newTodos);
    };

    const handeShowAll = () => {
        // setFilteredStatus('all')
        const queryParams = { status: "all" };
        navigate({
            path: "/",
            search: queryString.stringify(queryParams),
        });
    };

    const handeShowNew = () => {
        // setFilteredStatus('new')
        const queryParams = { status: "new" };
        navigate({
            path: "/",
            search: queryString.stringify(queryParams),
        });
    };

    const handeShowCompleted = () => {
        // setFilteredStatus('completed')
        const queryParams = { status: "completed" };
        navigate({
            path: "/",
            search: queryString.stringify(queryParams),
        });
    };

    const renderedTodoList = todoList.filter(
        (todo) => filteredStatus === "all" || filteredStatus === todo.status
    );

    return (
        <div>
            <h1>Todo List of Hoang Ka</h1>
            <TodoList TodoList={renderedTodoList} onTodoClick={handelClick} />
            <button onClick={handeShowAll}>show all</button>
            <button onClick={handeShowNew}>show new</button>
            <button onClick={handeShowCompleted}>show completed</button>
        </div>
    );
}

export default TodoLists;
