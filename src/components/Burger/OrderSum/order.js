import React from 'react';

import classes from './order.css';
const Order =(props)=>{

    let ingredients = {...props.ingredients};
    let list = null;
    let listArray = [];

    for(let i in ingredients){
       
           listArray.push(<span 
            style={{
                textTransform: 'capitalize',
                display: 'inline-block',
                margin: '0 8px',
                border: '1px solid #eee',
                boxShadow:'0 2px 3px #ccc',
                padding: '5px'
                }}
            key={i}>{i}:{ingredients[i]}</span>)
             
    }
    

    return (
        <div className = {classes.order}>
            <h3>Order Id:{props.orderId.slice(0,5)}</h3>
            <p>Ingredients: {listArray}</p>             
             <p>Price: <strong>USD {props.price.toFixed(2)}</strong></p>
        </div>
    )


}

export default Order