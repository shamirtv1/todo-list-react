import React, {useEffect, useReducer} from 'react';
import {TodoItem} from "./TodoItem.jsx";
import AddTodo from "./AddTodo.jsx";
import {TASK_STATUS} from "../constant.js";
import UseTodo from "../hooks/useTodo.jsx";



const TodoList = () => {

    const { todosList, onAddTodo, onDeleteTodo, onChangeStatus } = UseTodo()

    return (
        <>
            <h1>Todo App ({todosList.length})</h1>
            <hr/>

            <div className="row">
                <div className="col-7">
                    <ul className="list-group">

                        {
                            todosList.map((todo) =>
                                (<TodoItem
                                    key={todo.id}
                                    todo={todo}
                                    onDeleteTodo={onDeleteTodo}
                                    onChangeStatus={onChangeStatus}/>))
                        }

                    </ul>

                    <div className="d-flex justify-content-between">

                        <small className="fw-bold text-primary">
                            Realizados: {todosList.filter((todo) => todo.condition === TASK_STATUS.COMPLETED).length}
                        </small>
                        <small className="fw-bold text-danger">
                            Pendientes: {todosList.filter((todo) => todo.condition === TASK_STATUS.PENDING).length}
                        </small>

                    </div>

                </div>
                <div className="col-5">
                    <AddTodo onAddTodo={onAddTodo}/>
                </div>
            </div>

        </>
    );
};




export default TodoList;