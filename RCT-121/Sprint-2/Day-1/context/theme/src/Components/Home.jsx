
import React, { useContext } from 'react'
import { ThemeContext } from '../Context/ThemeContext';

export const Home = () => {

    const [state,toggleTheme]=useContext(ThemeContext);
    console.log("state",state)
  return (
    <div>

     
     <div>
    Hello World!
       
        </div>
   
    </div>
  )
}
