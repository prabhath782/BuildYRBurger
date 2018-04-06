import React from 'react'

import Logo from '../../Assets/burger-logo.png';
import classes from './Logo.css'

const logo = (props) => (
        <div className = {classes.Logo} style = {{height:props.height}} >
            <img src = {Logo} alt = "burger"/>
        </div>
    )

export default logo;