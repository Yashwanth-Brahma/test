import React, { useContext } from 'react'
import ThemeContext from '../Context/ThemeContext'

const ThemeToggler = () => {
    const [mode,setMode]=useContext(ThemeContext);

    return (
        <div 
        onClick={()=>
            setMode(mode==='light'?'dark':'light')
        }>
            <span>{mode==='light'?'Dark Mode':'Light Mode'}</span> 
        </div>
    )
}

export default ThemeToggler
