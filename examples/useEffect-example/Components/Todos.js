import React from 'react'
import { FaCheckDouble } from 'react-icons/fa'
import 'bootstrap/dist/css/bootstrap.css';
import { ListGroup, ListGroupItem } from 'reactstrap'

const Todos = ({todos, remove }) => {
    console.log("jhgk",todos);
      // todos=[todos]
    
    return (
        
      <ListGroup className="mt-5 mb-2 items">

        { todos.map(todo => (
          <ListGroupItem key={todo.id}>
            {todo.todoString}
            {console.log("asfas",todo)}
            <span className="float-right" onClick={() => remove(todo.id)}>
              <FaCheckDouble />
            </span>
          </ListGroupItem>
        ))}
      </ListGroup>
    );
  };
export default Todos
