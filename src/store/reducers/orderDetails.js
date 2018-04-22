import React from 'react'
import * as ActionTypes from '../actions/actionTypes';

const initialState = {
    orders:[],
    loading:true
}

export default (state = initialState,action) => {
    
    switch(action.type){
     case ActionTypes.FETCH_ORDERS:
     return{
         ...state,
         orders:action.payload,
         loading:false
     }
     case ActionTypes.PURCHASE_SUCCESS:
      return{
          ...state,
          loading:false,
          orders:state.orders.concat({
            ...action.orderData,
            id:action.orderId
})
      }
     case ActionTypes.PURCHASE_FAILURE:
      return {
          ...state,
          loading:false
      } 
     case ActionTypes.PURCHASE_STARTED:
      return{
          ...state,
          loading:true
      } 
     default:
     return state
    } 
}