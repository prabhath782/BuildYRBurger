import React,{Component} from 'react'

import Aux from '../../../hoc/Auxi';
import Button from '../../UI/Button/Button';

class OderSum extends Component{    
         
       componentWillUpdate(){
           console.log('component is updating');
       }

          render(){
          const ingredientsOrdered = Object.keys(this.props.ingredients).map(
                (iKey)=>(
                        <li key = {iKey}>
                            <span style = {{textTransform:'capitalize'}}>{iKey}</span>:{this.props.ingredients[iKey]}
                        </li>
                    ));

            return (
                <Aux>
                  <h3>Your Order</h3>
                  <ul>
                    {ingredientsOrdered}
                  </ul>
                  <p ><strong>Total Price:{this.props.totalPrice.toFixed(2)}</strong></p>
                  <Button btnType = 'Danger' clicked = {this.props.cancelBtn}>Cancel</Button>
                  <Button btnType = 'Success'clicked = {this.props.continueBtn} >Continue</Button>
               </Aux>
             )              
          }         
}


export default OderSum