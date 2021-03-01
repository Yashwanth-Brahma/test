import React, { Fragment } from 'react';
import Provider from './provider'
import Context from './context'

const App = () => {
    const Student=()=>{
        return (
            <Context.Consumer>
                {
                     context=>  (
                        <Fragment>
                            <p>name: {context.data.name}</p>
                            <p>completed: {context.data.completed}</p>
                            <button onClick={context.isCompleted}>complete</button>
                        </Fragment>
                     )
                }
                
            </Context.Consumer>
        )
    }

    const Database=()=>{
        return <Table/>
    }

    const Table=()=>{
        //
    }

    return (
        <div>
            <h1>student info</h1>
            <Provider>
                <Student />
            </Provider>
        </div>
    )
}

export default App
