import React, { useState } from 'react'
import { Button, Form, FormGroup, InputGroup, InputGroupAddon,Input } from 'reactstrap'
import { v4 } from 'uuid';


const TodoForm = ({addTodos}) => {
    const [todoString,setTodoString]=useState("");

    const handleEvent=(e)=>{
        e.preventDefault();
        if(todoString===""){
            return alert("enter the value");
        }
        const todo={
            todoString,
            id:v4()
        }
        addTodos(todo);
        setTodoString("");
    }

    return (
            <Form onSubmit={handleEvent}>
                <FormGroup>
                    <InputGroup>
                    <Input 
                    type="text"
                    name="todo"
                    id="todo"
                    value={todoString}
                    placeholder="Add todo"
                    onChange ={(e)=>setTodoString(e.target.value)}>
                    </Input>
                    <InputGroupAddon addonType="prepend">
                        <Button color='warning'>
                            ADD
                        </Button>
                    </InputGroupAddon>
                    </InputGroup>
                </FormGroup>
            </Form>
            
    )
}

export default TodoForm
