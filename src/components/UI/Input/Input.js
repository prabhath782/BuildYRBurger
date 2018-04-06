import React from 'react'

import classes from './Input.css'

const input = (props)=>{

    let inputElement = null;
    const inputElementClasses = [classes.InputElement];

    console.log(props);

    if(props.invalid && props.touched){
        inputElementClasses.push(classes.invalid);        
    }

    switch(props.elementtype){
        case('input'):               
           inputElement = <input value = {props.value}
                                 {...props.elementconfig}
                                 className = {inputElementClasses.join(' ')}
                                 onChange = {props.clicked} {...props}/>
           break
        case('textarea'):
           inputElement = <textarea value = {props.value}
                                    {...props.elementconfig}
                                    className = {inputElementClasses.join(' ')}
                                    onChange = {props.clicked}
                                    {...props}/>
           break
           case ( 'select' ):
           inputElement = (
               <select
                   className={inputElementClasses.join(' ')}
                   value={props.value}
                   onChange = {props.changed}>                   
                   {props.elementconfig.options.map(option => (
                       <option key={option.value} 
                               value={option.value}
                               >
                               {option.displayValue}

                       </option>
                   ))}
               </select>
           );
           break;
           default: (
               inputElement = <div/>
           )                      
    }
return( 
    
    <div>
        <label>{props.label}</label>
           {inputElement}
     </div>
)

}

export default input;