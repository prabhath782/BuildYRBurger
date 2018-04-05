import React ,{ Component } from 'react';
import {connect} from 'react-redux';

import Axios from '../../anxios.orders';
import Aux from '../../hoc/Auxi';
import Burger from '../../components/Burger/Burger';
import BuildControls  from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSum/OrderSum';
import Spinner from '../../components/UI/LodingSpinner/LoadingSpinner';
import errorHandler from '../../hoc/ErrorHandler/ErrorHandling';
import * as actionCreators from '../../store/actions/index';

    const ingredientPrices = {
        salad:0.3,
        bacon:0.4,
        cheese:0.5,
        meat:1.0
    }

class BurgerBuilder extends Component {
    constructor(props){
        super(props)
        this.state = {
            // ingredients:null,
            // currentPrice : 0,
            purchasable:false,
            purchase:false,
            loading:false
        }
    }

            componentDidMount() {
                console.log(this.props)
            }

               updatePurchaseState(ingredients) {
                   const sum = Object.keys(ingredients)
                       .map(igKey => {
                           return ingredients[igKey];
                       })
                       .reduce((sum, el) => {
                           return sum + el;
                       }, 0);
                     return sum > 0 ;
               }                 
           purchaseHandler = ()=>{
                  this.setState({
                      purchase:true          
                  })
            }

          purchaseCancle = ()=> {
              this.setState({
                  purchase:false
              })
          }
            
            continuepurchase = ()=>{                
                this.props.history.push('/checkout');
          }
            
    render(){
          let orderSummary = null;    
          const shouldDisable = {
            ...this.props.ings
          }

         for(let key in shouldDisable){
             shouldDisable[key] = shouldDisable[key]<=0;  
           }

        let burgerPriceBtn = this.props.currentPrice <= 0;
        let burger = <Spinner/>
         
        if(this.props.ings){
             burger = (
                <Aux>
                    <Burger  ingredients = {this.props.ings}/>                                    
                      <BuildControls trols  add = {this.props.addIngredient}
                                      sub = {this.props.removeIngredient}
                      disabled = {shouldDisable}
                      price = {this.props.currentPrice}
                      purchasable = {this.updatePurchaseState(this.props.ings)} 
                      purchase = {this.purchaseHandler}
                      checkOutbtnDisable = {burgerPriceBtn}/>
                </Aux>
              );
              
              orderSummary = <OrderSummary ingredients = {this.props.ings}
                                         cancelBtn = {this.purchaseCancle}
                                         continueBtn = {this.continuepurchase}
                                         totalPrice = {this.props.currentPrice}>
                           </OrderSummary>;
        }

        if(this.state.loading){
            orderSummary = <Spinner/>
        }


        return(
            <Aux>
                <Modal show = {this.state.purchase}
                       purchaseCancle = {this.backDropClick}>
                {orderSummary}
               </Modal>  
               {burger}              
            </Aux>
        )                  
    }
}

const mapStateToProps = state =>{
    return {
        ings:state.burgerReducer.ingredients,
        currentPrice:state.burgerReducer.currentPrice
    }
}

const mapDespatchToProps = dispatch =>{

  return {
      addIngredient: (ingredientName)=>{ dispatch(actionCreators.addIngredient(ingredientName)) },
      removeIngredient: (ingredientName)=>{ dispatch(actionCreators.removeIngredient(ingredientName)) }
  }

}


export default connect(mapStateToProps,mapDespatchToProps)(errorHandler(BurgerBuilder,Axios)); 
