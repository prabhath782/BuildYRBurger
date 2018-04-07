import {combineReducers} from 'redux';

import Reducer from './reducer';
import OrderDetails from './orderDetails';

const combinreducers = ()=>combineReducers(
        {burgerReducer:Reducer,
         orderdetails:OrderDetails
        })

export default combinreducers;
