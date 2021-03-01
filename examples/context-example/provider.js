import React,{useState} from 'react'
import MyContex from './context';

const Provider = props => {
    const [studInfo, setStudInfo] = useState({
        name:"yash",
        course:"web dev",
        completed:"No"
    });

    return (
        <MyContex.Provider value={{
            data:studInfo,
            isCompleted:()=>{
                setStudInfo({...studInfo, completed:"yes"})}
        }
        }>
        {props.children}
        </MyContex.Provider>
            
        
    );
};

export default Provider;
