import * as Actiontypes from '../actions/actionTypes';

const intialState={}
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
        default:return{
            state
        }
    }
}

export default contactDetailsReducer;