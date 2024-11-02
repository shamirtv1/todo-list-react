import React, {useEffect, useReducer} from 'react';

const UseTodo = () => {

    const [todosList, dispatch] = useReducer(todoReducer, [], () => {
        return JSON.parse(localStorage.getItem('todos')) || [];
    });

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todosList));
    }, [todosList]);

    const onAddTodo = (newTodo) => dispatch({type: 'add', newTodo: newTodo});
    const onDeleteTodo = (todo) => dispatch({type: 'delete', todo: todo});
    const onChangeStatus = (newTodo) => dispatch({type: 'update', newTodo: newTodo});

    return {todosList, onAddTodo, onDeleteTodo, onChangeStatus}

};

const todoReducer = (todosList, action) => {
    switch (action.type) {
        case 'add':
            return [...todosList, action.newTodo];
        case 'delete': {
            if (confirm("Are you sure?"))
                return todosList.filter(todo => todo.id !== action.todo.id)
        }
            break
        case 'update':
            return todosList.map(todo => (todo.id === action.newTodo.id) ? action.newTodo : todo)

    }
}

export default UseTodo;