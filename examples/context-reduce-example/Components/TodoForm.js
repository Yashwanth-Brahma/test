import React, { useContext, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { Form, FormGroup, InputGroup, InputGroupAddon,Button,Input } from 'reactstrap'
import TodoContext from '../Context/TodoContext'
import { v4 } from 'uuid';
import { ADD_TODO } from '../Context/action.type';
import '../App.css';

function TodoForm() {
    const [todoString, setTodoString] = useState("");
    const { dispatch } = useContext(TodoContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (todoString === "") {
            return alert("enter todo");
        }
        const todo = {
            todoString,
            id: v4()
        };

        dispatch({
            type: ADD_TODO,
            payload: todo
        });

        setTodoString("");
    };

    return (
        <Form onSubmit={handleSubmit} className='form'>
            <FormGroup>
                <InputGroup>
                    <Input type='text'
                        placeholder='todo'
                        id='todo'
                        name='todo'
                        value={todoString}
                        onChange={e => setTodoString(e.target.value)}
                    >
                    </Input>
                    <InputGroupAddon addonType='prepend'>
                        <Button
                            color='warning'>
                            Add
                        </Button>
                    </InputGroupAddon>
                </InputGroup>
            </FormGroup>
        </Form>
    );
}

export default TodoForm
