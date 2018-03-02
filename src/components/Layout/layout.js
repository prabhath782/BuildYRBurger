import React, { Component } from 'react';

import classes from './Layout.css'
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

class LayOut extends Component{
    state = {
        showSideDrawer:false
    }

    sideDrawerClosedHandler = ()=>{
      this.setState({
          showSideDrawer:!this.state.showSideDrawer
      })
    }


render(){    
    return(
         <div className = {classes.Content}>
         <Toolbar open = {this.state.showSideDrawer} ToggleClicked = {this.sideDrawerClosedHandler}/>
         <SideDrawer open = {this.state.showSideDrawer} closed = {this.sideDrawerClosedHandler}/>
           {this.props.children}
        </div>
    )           
 }
}

export default LayOut