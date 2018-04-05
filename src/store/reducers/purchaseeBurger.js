import * as Actiontypes from '../actions/actionTypes';

const contactDetailsReducer = (state=intialState,action)=>{

    switch(action.type){
        case Actiontypes.PURCHASE_SUCCESS:
        return {
            ...state,
        }
        case Actiontypes.PRUCHASE_FAILURE:
        return{
            ...state
        }
    }
}

export default contactDetailsReducer;