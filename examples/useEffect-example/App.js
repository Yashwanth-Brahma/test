import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { Container } from 'reactstrap';

import './App.css';
import TodoForm from './Components/TodoForm';
import Todos from './Components/Todos';

const App = () => {
    const [todos,setTodos]=useState([]);

    useEffect(()=>{
      const localTodos=localStorage.getItem("todos");
      console.log("jjj",localStorage)
      if(localTodos)
        setTodos(JSON.parse(localTodos))
    },[])

    const addTodos=async (todo)=>{
      setTodos([...todos,todo]);
    }

    useEffect(()=>{
      localStorage.setItem("todos",JSON.stringify(todos));
      console.log("yyy",todos);
    },[todos]);

    const remove=id=>{
      return(
        setTodos(todos.filter(todo=>todo.id!==id))
      )
    }

    return (
      <div>
            <Container fluid>
                <h1>TODO APP</h1>
                <TodoForm addTodos={addTodos}/> 
                <Todos todos={todos} remove={remove}/>
            </Container>
      </div>  
    );
}

export default App

