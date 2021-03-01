import React, { Fragment, useState } from 'react'
import Main from './components/Main';
import ThemeContext from './Context/ThemeContext';

const App = () => {
    const theme=useState("light");
    return (
        <div>
            <ThemeContext.Provider value={
                theme
            }>
                <Fragment>
                    <Main />
                </Fragment>
            </ThemeContext.Provider>
        </div>
    )
}

export default App

