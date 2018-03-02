import React from 'react';
import classes from './buildControl.css';

const BuildControl = (props)=>{
return(
    <div className = {classes.BuildControl}>
      <div className = {classes.Label}>{props.label}</div>
       <button 
              className = {classes.Less} 
              onClick = {props.sub}
              disabled = {props.disabled} >-
       </button>
       <button 
               className = {classes.More}
               onClick = { props.add}
               >+
               </button>

    </div>
  );
}

export default BuildControl;