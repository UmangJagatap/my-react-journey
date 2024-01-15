// import React from 'react'

import { useReducer } from "react";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";
// import TodoList from "./TodoList";

let nextId = 4;
const initialTodos = [
    { id: 1, text: "learn JavaScript", done: true },
    { id: 2, text: "Build spotify clone using JavaScript", done: false },
    { id: 3, text: "learn React", done: false },
];

function todosReducer(todos, action) {
    const { type } = action;
    const { id, text } = action;
    const updatedTodo = action.todo;
    const todoId = action.id;
    switch (type) {
        case "add":

            return [...todos, { id, text, done: false }];

        case "change":

            return todos.map(existingTodo => {
                if (existingTodo.id === updatedTodo.id) {
                    return updatedTodo;
                } else {
                    return existingTodo;
                }
            });

        case "delete":
            return todos.filter((todo) => todo.id !== todoId)



    }
}

export default function TodoApp() {

    const [todos, dispatch] = useReducer(todosReducer, initialTodos);
    function handleAddTodo(text) {
        dispatch({
            type: "add",
            id: nextId++,
            text,
        });
        // setTodos([...todos, {
        //     id: nextId++,
        //     text,
        //     done: false,
        // },]);

    }

    function handleTodoChange(updatedTodo) {
        dispatch({
            type: "change",
            todo: updatedTodo
        })
        // setTodos(todos.map(existingTodo => {
        //     if (existingTodo.id === updatedTodo.id) {
        //         return updatedTodo;
        //     } else {
        //         return existingTodo;
        //     }
        // }))
    }

    function handleTodoDelete(todoId) {
        dispatch({
            type: 'delete',
            id: todoId
        })
        // setTodos(todos.filter((todo) => todo.id !== todoId))
    }

    return (
        <>
            <h2>Todos</h2>
            <AddTodo onAddTodo={handleAddTodo} />
            <TodoList todos={todos} onTodoChange={handleTodoChange} onTodoDelete={handleTodoDelete} />
        </>
    );



}

