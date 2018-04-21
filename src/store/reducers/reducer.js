import * as actionTypes from '../actions/actionTypes';

const initialState = {
           ingredients:null,
           currentPrice : 0,
           error:false
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
        case actionTypes.FETCH_INGREDIENTS:
            return {
               ...state,
               // ingredients:{...this.state.ingredients},
               ingredients:{
                   salad:action.ings.salad,
                   cheese:action.ings.cheese,
                   bacon:action.ings.bacon,
                   meat:action.ings.meat
               }
            }
        case actionTypes.FETCH_FAILED:
            return{
                ...state,
                error:true
            }        
       default :
             return state    
       }    
    
    }

export default reducer;