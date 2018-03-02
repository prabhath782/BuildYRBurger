import React from 'react';

import classes from './Toolbar.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToogle from '../SideDrawer/DrawerToggle/DrawerToggle';
const menu = (props)=>{
    return(
      <header className = {classes.Toolbar}>                 
        <DrawerToogle ToggleClicked = {props.ToggleClicked}/>
        <Logo height = "100%">
        </Logo>
        <nav className = {classes.Display}>
          <NavigationItems />  
        </nav>
      </header>

    )
}

export default menu