import {CombineReducers} from 'redux';

import Reducer from './reducer';
import OrderDetails from './orderDetails';

const combinreducers = ()=>{
    return CombineReducers(
        {burgerReducer:Reducer,
         orderdetails:OrderDetails
        });
}

export default combinreducers;
