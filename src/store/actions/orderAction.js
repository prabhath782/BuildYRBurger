import React from 'react'
import axios from 'axios';

import * as actionTypes from './actionTypes';

export const fetchO =  (orders) => ({
   type:actionTypes.FETCH_ORDERS,
   payload:orders
})

export const fetchOrders = ()=> dispatch=>{
  axios.get('https://buildburger-ea9b1.firebaseio.com//orders.json')
        .then(res=>{
            dispatch(fetchO(res.data));
        })
}

export const purchaseSucess = (id,data)=>({
    type:actionTypes.PURCHASE_SUCCESS,
    orderId:id,
    orderData:data
})

export const purchaseFailure = (err)=>({
    type:actionTypes.PURCHASE_FAILURE,
    error:err
})

export const purchaseStarted = ()=>({
    type:actionTypes.PURCHASE_STARTED
})

export const purchaseOrder = (orderData)=> dispatch=>{
    dispatch(purchaseStarted()) 
    axios.post('/orders.json',orderData)
          .then(res=>dispatch(purchaseSucess(res.id,orderData)))
          .catch(err=>dispatch(purchaseFailure(err)))
}
