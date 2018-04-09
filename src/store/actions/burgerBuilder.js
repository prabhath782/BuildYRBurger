import * as actionTypes from './actionTypes';
import axios from '../../anxios.orders';

export const addIngredient = (ingName)=>({
        type:actionTypes.ADD_INGREDIENT,
        ingredientName:ingName
    });

export const removeIngredient = (ingName)=>({
        type:actionTypes.REMOVE_INGREDIENT,
        ingredientName:ingName
    });

export const fetch = (ingredients)=>({
  type:actionTypes.FETCH_INGREDIENTS,
  ings:ingredients
});

export const fetchFailed =()=>({
  type:actionTypes.FETCH_FAILED
})

export const fetchIngredients = ()=>dispatch=>{
    console.log('fetching')
    axios.get('https://buildburger-ea9b1.firebaseio.com//ingredients.json')
          .then(res=>{
              dispatch(fetch(res.data))
            })
          .catch(err=>{
              dispatch(fetchFailed())
        })
}