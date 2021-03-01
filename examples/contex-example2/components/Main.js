import React, { useContext } from 'react'
import AppTheme from '../Colors';
import ThemeContext from '../Context/ThemeContext'
import ThemeToggler from './ThemeToggler';

const Main = () => {
    const theme = useContext(ThemeContext)[0]
    const currentTheme = AppTheme[theme];
    return (
        <div>
            <h1>toggler</h1>
            <ThemeToggler />
        <div 
        style={{
            backgroundColor: `${currentTheme.backgroundColor}`,
            color:`${currentTheme.color}`
        }
        }>
            <h1>Theme toggler</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Impedit facilis et ipsa voluptatibus tenetur asperiores
                hic quos molestias dicta. Consequatur rerum laborum dolorem
                fuga odit rem unde sed accusamus natus.
             </p>
        </div>
        </div>
    )
}

export default Main
