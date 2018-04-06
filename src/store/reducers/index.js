import {CombineReducers} from 'redux';

import Reducer from './reducer';
import OrderDetails from './orderDetails';

const combinreducers = ()=>CombineReducers(
        {burgerReducer:Reducer,
         orderdetails:OrderDetails
        })

export default combinreducers;
