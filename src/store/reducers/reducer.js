import * as actionTypes from '../actions/actionTypes';

const initialState = {
           ingredients:{
               salad:0,
               bacon:0,
               meat:0,
               cheese:0
           },
           currentPrice : 0,
     }

 const ingredientPrices = {
           salad:0.3,
           bacon:0.4,
           cheese:0.5,
           meat:1.0
}     

const reducer = (state = initialState,action)=>{

    switch(action.type){
        case actionTypes.ADD_INGREDIENT:
            return{
                ...state,
                ingredients:{
                    ...state.ingredients,
                    [action.ingredientName]:state.ingredients[action.ingredientName]+1
                },
                currentPrice: state.currentPrice + ingredientPrices[action.ingredientName]
            }
       case actionTypes.REMOVE_INGREDIENT:
             return{
              ...state,
              ingredients:{
                  ...state.ingredients,
                  [action.ingredientName]:state.ingredients[action.ingredientName]-1
              },
              currentPrice: state.currentPrice - ingredientPrices[action.ingredientName]
            }   
       default :
             return state    
       }    
    
    }

export default reducer;