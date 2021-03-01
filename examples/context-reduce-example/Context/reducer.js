import { act } from 'react-dom/test-utils';
import './action.type';
import { ADD_TODO, REMOVE_TODO } from './action.type';

export default(state,action)=>{
    switch (action.type) {
        case ADD_TODO:
            return[...state,action.payload];
        case REMOVE_TODO:
            return state.filter(todo=>todo.id!==action.payload);
        default:
            return state;
    }
}