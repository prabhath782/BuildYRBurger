import * as ActionTypes from '../actions/actionTypes';
import axios from '../../anxios.orders';

const purchaseSuccess = (name,order)=>{
   return{
       type:ActionTypes.PURCHASE_SUCCESS,
       name:name,
       payLoad:order
   }
}

const purchaseFailure = (error)=>{
    return{
        type:ActionTypes.PURCHASE_FAILURE,
        payLoad:error
    }
}


export const purchaseStart = (order)=>{
     return dispatch =>{
         dispatch(purchaseStart())
         axios.post('/orders.json',order)
         .then(res =>{
             dispatch(purchaseSuccess(res.data.name, order))
         })
         .catch((err)=>{
             dispatch(purchaseFailure(err))
         })
     }
}
