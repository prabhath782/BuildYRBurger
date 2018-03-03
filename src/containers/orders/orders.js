import React, { Component } from 'react';

import Order from '../../components/Burger/OrderSum/order';
import Axios from '../../anxios.orders';
import ErrorHandler from '../../hoc/ErrorHandler/ErrorHandling';
class Orders extends Component{

    state ={
        orders : [],
        loading:true
    }
    
    componentDidMount(){
        const fetchOrders = []
        Axios.get('/orders.json')
               .then(res=>{  
                for(let key in res.data){                    
                    fetchOrders.push({...res.data[key],id:key})                    
                } 
                
                this.setState({
                    orders:fetchOrders,
                    loading:false
                })               
               })
               .catch(
                this.setState({
                    loading:false
                })
               )
    }

    render(){
        return(
            <div>
                 {this.state.orders.map(order=> {                                              
                return( <Order
                         key ={order.id}
                         orderId ={order.id}
                         ingredients = {order.ingredients}
                         price = {+order.price}/>)
                
                 })}  

            </div>
        )
    }
}

export default ErrorHandler(Orders,Axios);