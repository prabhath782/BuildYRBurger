import React from 'react';

import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './sideDrawer.css';
import BackDrop from '../../UI/BackDrop/BackDrop';
import Aux from '../../../hoc/Auxi';
const sideDrawer = (props)=>{

    let sideDrawerClasses = [classes.SideDrawer, classes.Close]

    if(props.open){
        sideDrawerClasses = [classes.SideDrawer, classes.Open]
    }

    return(
        <Aux>
          <BackDrop show = {props.open} backDropClick = {props.closed}/>
          <div className = {sideDrawerClasses.join(" ")}>        
           <Logo height = "11%"/>        
           <NavigationItems/>
          </div>
          
        </Aux>
    )

}

export default sideDrawer;