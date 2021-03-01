import React, { useReducer } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { Container } from 'reactstrap';

import todoReducer from './Context/reducer'
import TodoContext from './Context/TodoContext';
import './App.css';
import TodoForm from './Components/TodoForm';
import Todos from './Components/Todos';

const App = () => {
    const [todos,dispatch]=useReducer(todoReducer,[]);
    return (
      <div>
          <TodoContext.Provider value={{todos,dispatch}}>
            <Container fluid>
                <h1>TODO APP</h1>
                
                <TodoForm /> 
                <Todos />
            </Container>
          </TodoContext.Provider>
      </div>  
    );
}

export default App

