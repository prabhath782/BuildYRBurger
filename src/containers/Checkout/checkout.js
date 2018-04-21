import React,{Component} from 'react';
import { Route } from 'react-router-dom';
import {connect} from 'react-redux';    

import CheckOutSummary from '../../components/Order/CheckOutSummary';
import ContactDetails from '../../containers/Checkout/ContactDetails/ContactDetails';

class checkout extends Component{
    CancelBtnHandler =() =>{
       this.props.history.goBack();
    }

    continueBtnHandler=()=>{
       this.props.history.replace('/checkout/contactdetails-form');

    }

    render(){
        return(
            <div>
                <CheckOutSummary  ingredients = {this.props.ings}
                                  cancel = {this.CancelBtnHandler}
                                  continue = {this.continueBtnHandler}/>
                <Route path = {`${this.props.match.path  }/contactdetails-form`}
                       component = {ContactDetails}/>
            </div>
        )
    }


}

const mapStateToProps = state=>({
        ings:state.ingredients,
        currentPrice:state.currentPrice
    })

export default connect(mapStateToProps)(checkout);