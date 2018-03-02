import React,{Component} from 'react';
import { Route } from 'react-router-dom';

import CheckOutSummary from '../../components/Order/CheckOutSummary';
import ContactDetails from '../../containers/Checkout/ContactDetails/ContactDetails';

class checkout extends Component{
    state = {
     ingredients:null,
     ingredientsStatus:true,
     price:0  
    }
  
componentWillMount(){
    const query = new URLSearchParams(this.props.location.search);
    const ingredients = {}
    let price = 0
    for(let param of query.entries()){

        if(param[0]=='price'){
           price = param[1]
        }
         else{ingredients[param[0]] = +param[1];}
        
    }

    this.setState({
        ingredients:ingredients,
        price:price
    })
}

    CancelBtnHandler =() =>{
       this.props.history.goBack();
    }

    continueBtnHandler=()=>{
       this.props.history.replace('/checkout/contactdetails-form');

    }

    render(){
        return(
            <div>
                <CheckOutSummary  ingredients = {this.state.ingredients}
                                  cancel = {this.CancelBtnHandler}
                                  continue = {this.continueBtnHandler}/>
                <Route path = {this.props.match.path + '/contactdetails-form'}
                       render ={(props)=> (<ContactDetails
                       ingredients = {this.state.ingredients}
                       price = {this.state.price}
                       {...props}/>
                       )}/>
            </div>
        )
    }


}

export default checkout;