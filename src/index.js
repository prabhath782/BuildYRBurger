import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter}from 'react-router-dom';
import {createStore,applyMiddleware,compose,combineReducers} from 'redux';
import {Provider} from 'react-redux';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
// import CombineReducers from './store/reducers/index';
import reducer from './store/reducers/reducer';
import purchase from './store/reducers/purchaseeBurger';
import orderDetails from './store/reducers/orderDetails';

const rootReducer = combineReducers({
    burgerReducer:reducer,
    purchaseReducer:purchase,
    orderDetailsReducer:orderDetails
})

const logger = store=> next => action=>{
            console.log('[Middleware] Dispatching', action);
            const result = next(action);
            console.log('[Middleware] next state', store.getState());
            return result;
         }
             
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer,composeEnhancers(applyMiddleware(logger)));

const app = (
    <Provider store = {store}>
    <BrowserRouter>
         <App />
    </BrowserRouter>
    </Provider>
)

ReactDOM.render(app,document.getElementById('root'));
registerServiceWorker();
