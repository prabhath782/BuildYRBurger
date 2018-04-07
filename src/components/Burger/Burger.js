import React from 'react';
import classes from './burger.css';
import BurgerIngredient from './BurgerIngredients/BurgerIngredients';

const burger = (props)=>{
    const message = null;
    let transformedIngredients = Object.keys(props.ingredients)
                                    .map(iKey =>[...Array(props.ingredients[iKey])]
                                          .map((_, i)=><BurgerIngredient key ={iKey+i} type = {iKey} />)).reduce((prearray,currentArray)=>prearray.concat(currentArray))     
     if(transformedIngredients.length === 0){

        transformedIngredients  = <p>Please start adding ingredients</p>
          
     }                               

    return(
        <div className = {classes.Burger}>                           
           <BurgerIngredient type = "bread-top" />
                            {transformedIngredients}
           <BurgerIngredient type = "bread-bottom" />
                 {message}
        </div>
    ); 

}

export default burger