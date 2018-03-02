import React from 'react';
import classes from './burger.css';
import BurgerIngredient from './BurgerIngredients/BurgerIngredients';

const burger = (props)=>{
    let message = null;
    let transformedIngredients = Object.keys(props.ingredients)
                                    .map(iKey =>{
                                        return [...Array(props.ingredients[iKey])]
                                          .map((_, i)=>{
                                             return  <BurgerIngredient key ={iKey+i} type = {iKey}></BurgerIngredient>
                                          })

                    
                                    }).reduce((prearray,currentArray)=>{
                                        return prearray.concat(currentArray)
                                    })
                                    ;
     
     if(transformedIngredients.length === 0){

        transformedIngredients  = <p>Please start adding ingredients</p>
          
     }                               

    return(

         
        <div className = {classes.Burger}>                           
           <BurgerIngredient type = "bread-top"></BurgerIngredient>
                            {transformedIngredients}
           <BurgerIngredient type = "bread-bottom"></BurgerIngredient>           
                 {message}
        </div>
    ); 

}

export default burger