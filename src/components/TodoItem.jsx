import React, {useEffect, useState} from 'react';

export const TodoItem = ({ todo, onDeleteTodo, onChangeStatus }) => {

    const [state, setState] = useState(todo)

    const handleUpdateTodo = () => {
        const newState = { ...state, condition: !state.condition };
        setState(newState);
    }

    useEffect(() => { onChangeStatus(state); }, [state]);

    return (
        <>
            <li className="list-group-item d-flex justify-content-between">
                <div>
                    <input type="checkbox" defaultChecked={ !!state.condition } className="form-check-input me-3" onChange={ () => handleUpdateTodo() } />
                    <span className={`align-self-center fw-semibold text-capitalize ${ state.condition ? 'text-decoration-line-through' : '' }`}>
                        {state.task}
                    </span>
                </div>

                <button className="btn btn-danger btn-sm" onClick={ ()=> onDeleteTodo(state) }>Borrar</button>
            </li>
        </>
    );
};