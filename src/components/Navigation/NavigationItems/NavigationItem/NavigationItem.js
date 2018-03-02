import React from 'react';

import classes from './NavigationItem.css'
import {NavLink,Switch,Redirect} from 'react-router-dom';
const navigationItem = (props)=>{
return(   
    <li className = {classes.Navigationitem}>
      <NavLink to = {props.link} 
               activeClassName = {classes.active} >{props.children}       
      </NavLink>              
    </li>
 )    

}

export default navigationItem;