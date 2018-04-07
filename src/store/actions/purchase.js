import * as ActionTypes from '../actions/actionTypes';
import axios from '../../anxios.orders';

const purchaseSuccess = (person,order)=>({
       type:ActionTypes.PURCHASE_SUCCESS,
       name:person,
       payLoad:order
   })

const purchaseFailure = (error)=>({
        type:ActionTypes.PURCHASE_FAILURE,
        payLoad:error
    })


export const purchaseStart = (order)=>dispatch =>{
         dispatch(purchaseStart())
         axios.post('/orders.json',order)
         .then(res =>{
             dispatch(purchaseSuccess(res.data.name, order))
         })
         .catch((err)=>{
             dispatch(purchaseFailure(err))
         })
     }
