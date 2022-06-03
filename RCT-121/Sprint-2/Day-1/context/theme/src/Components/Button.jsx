

import * as React from 'react';
import Switch from '@mui/material/Switch';
import { useContext } from "react";
const label = { inputProps: { 'aria-label': 'Switch demo' } };
import { ThemeContext } from '../Context/ThemeContext';
export default function BasicSwitches() {
    const [state,toggleTheme] =useContext(ThemeContext);

  return (
      
    <div>
       
      <Switch onChange={()=>{
              
                toggleTheme()
            }}{...label} defaultChecked />
    
    </div>
  );
}