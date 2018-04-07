import React from 'react';

import Burger from '../../components/Burger/Burger';
import Button from '../UI/Button/Button';
import classes from './CheckOutSummary.css'; 

const CheckOutSummary = (props)=>(
        <div className = {classes.checkoutSummary}>
            <h1>Hope the burger tastes Good!</h1>
            <Burger ingredients = {props.ingredients} />
            <Button btnType = "Danger" 
                    clicked = {props.cancel}>CANCEL</Button>
            <Button btnType = "Success"
                    clicked = {props.continue}>Continue</Button>
        </div>
    )

export default CheckOutSummary;