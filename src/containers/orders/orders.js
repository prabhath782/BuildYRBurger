import React, { Component } from 'react';
import {connect} from 'react-redux'

import Order from '../../components/Burger/OrderSum/order';
import Loading from '../../components/UI/LodingSpinner/LoadingSpinner';
import Axios from '../../anxios.orders';
import ErrorHandler from '../../hoc/ErrorHandler/ErrorHandling';
import * as actionCreators from '../../store/actions/orderAction';

class Orders extends Component{
    componentDidMount(){     
        this.props.fetchOrders();
    }
    
    loading = () =>{
        const orders = Object.keys(this.props.orders);
        
        console.log(typeof(orders));
        if(this.props.loading){
          return (
              <Loading />
          )
        }
        else if(orders.length !==0){
            
            return(<div>
                {orders.map(order=> (<Order
                        key ={order}
                        orderId ={order}
                        ingredients = {this.props.orders[order].ingredients}
                        price = {+this.props.orders[order].price} />))}  

           </div>)
        }
    return (
        <h1> Fetching Error </h1>
    )

    }


    loading = ()=>{
    
    const orders = Object.keys(this.props.orders);
    const fetchedOrders = {...this.props.orders};
      if(this.props.loading){
          return(
              <Loading />
          )
      }

      return(
        <div>
        {orders.map(order=> ( <Order
                key ={order}
                orderId ={order}
                ingredients = {fetchedOrders[order].ingredients}
                price = {+fetchedOrders[order].price}/>))}  
        </div>)
    }

    render(){
        console.log(this.props.orders)

        return(this.loading()
            )
        
    }
}

const mapStateToProps = (state)=>({
  orders:state.orderDetailsReducer.orders,
  loading:state.orderDetailsReducer.loading
})

const mapDispatchToProps = (dispatch)=>({
 fetchOrders:()=>dispatch(actionCreators.fetchOrders())
})

export default connect(mapStateToProps,mapDispatchToProps)(ErrorHandler(Orders,Axios));