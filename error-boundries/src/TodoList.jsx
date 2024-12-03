/* eslint-disable react/prop-types */
// import React from 'react'

import { useContext } from "react";
import { TodosDispatchContext } from "./TodoApp";
import { TodosContext } from "./TodoApp";


export default function TodoList() {
    const todos = useContext(TodosContext);
    return (
        <ul className="todo-list">
            {todos.map((todo) => (
                <li key={todo.id}>
                    <Todo todo={todo} />
                </li>
            ))}
        </ul>
    );

}

function Todo({ todo }) {
    const dispatch = useContext(TodosDispatchContext);
    return (
        <>
            <input style={{ margin: "0.5rem", height: "1.5rem", width: "1.5rem" }} type="checkbox" name={`${todo.id}-done`} id={`${todo.id}-done`} checked={todo.done} onChange={(e) => {
                dispatch({
                    type: "change",
                    todo: { ...todo, done: e.target.checked },
                });

            }} />

            {todo.text}

            <button style={{ margin: "0.5rem", width: "3rem", height: "3rem" }} onClick={() => dispatch({
                type: 'delete',
                id: todo.id,
            })}>❌</button>
        </>

    );

}
