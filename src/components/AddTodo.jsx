import {useForm} from "../hooks/useForm.js";
import {TASK_STATUS} from "../constant.js";

const AddTodo = ({onAddTodo}) => {

    const { description, onInputChange, onResetForm } = useForm({
        description: ''
    });

    const onFormSubmit = (event) => {
        event.preventDefault();
        if (description.length <= 1) return;

        const newTodo = {
            id: new Date().getTime(),
            task: description,
            condition: TASK_STATUS.PENDING
        }

        onAddTodo(newTodo);
        onResetForm();

    }

    return (
        <>

            <h4>Agregar TODO</h4>
            <hr/>

            <form onSubmit={onFormSubmit}>
                <input
                    name="description"
                    onChange={onInputChange}
                    value={description}
                    type="text"
                    placeholder="Que hay que hacer"
                    className="form-control"/>

                <button type="submit" className='btn btn-outline-primary mt-2'>Agregar</button>
            </form>

        </>
    );
};

export default AddTodo;