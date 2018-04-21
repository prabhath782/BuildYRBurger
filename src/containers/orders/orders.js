import React, { Component } from 'react';
import {connect} from 'react-redux'

import Order from '../../components/Burger/OrderSum/order';
import Axios from '../../anxios.orders';
import ErrorHandler from '../../hoc/ErrorHandler/ErrorHandling';
import * as actionCreators from '../../store/actions/orderAction';

class Orders extends Component{
    // state ={
    //     orders : [],
    //     loading:true
    // }        // state ={
    //     orders : [],
    //     loading:true
    // } 
    componentDidMount(){
        // const fetchOrders = []
        // Axios.get('/orders.json')
        //        .then(res=>{  
        //            Object.keys(res.data).forEach((key)=>(
        //             fetchOrders.push({...res.data[key],id:key})                       
        //            ))                
        //         this.setState({
        //             ...this.state,
        //             orders:fetchOrders,
        //             loading:false
        //         })               
        //        })
        //        .catch(
        //         this.setState({
        //             ...this.state,
        //             loading:false
        //         })
        //        )
        this.props.fetchOrders();
    }

    render(){
        console.log(this.props.orders)
        return(
            <div>
                 {this.props.orders.map(order=> ( <Order
                         key ={order.id}
                         orderId ={order.id}
                         ingredients = {order.ingredients}
                         price = {+order.price}/>))}  

            </div>
        )
    }
}

const mapStateToProps = (state)=>({
  orders:state.orderDetailsReducer.orders
})

const mapDispatchToProps = (dispatch)=>({
 fetchOrders:()=>dispatch(actionCreators.fetchOrders())
})

export default connect(mapStateToProps,mapDispatchToProps)(ErrorHandler(Orders,Axios));