import React,{Component} from 'react'

import Axios from '../../../anxios.orders';
import Button from '../../../components/UI/Button/Button';
import classes from './ContactDetails.css';
import LoadingSpinner from '../../../components/UI/LodingSpinner/LoadingSpinner';

class ContactDetails extends Component{

    state = {
        name: '',
        email: '',
        address: {
            street: '',
            postalCode: ''
        },
        loading: false       
    }
    
    orderHandler = (event)=>{
        event.preventDefault();
        this.setState({
            loading:true
        })
        let customerOrder = {
            ingredients:this.state.ingredients,
            price:this.state.price,
            customer:{
                       name:'JimmyJohn',
                       phoneNumber:'33456777',
                          address:{
                          street:'thisstreet',
                          areaCode:'99999'
                                  }
                     },
            delivery:'fastest'
         }

 Axios.post('/orders.json',customerOrder)
       .then(res=>{
         console.log(res);
         this.setState({loading:false})
         this.props.history.push('/')
       })
       .catch(err=>{
       this.setState({loading:false})
     });

     console.log(this.props)

     this.props.history.push('/')
    
    }

    render(){

        let form = (<form>
                      <input type = 'text' placeholder = 'Username'/>
                      <input type = 'email' placeholder = 'email address'/>
                      <input type = 'text' placeholder = 'Street address'/>
                      <input type = 'text' placeholder = 'Area Code'/>

                     <Button btnType = 'Success'
                             clicked = {this.orderHandler}>DONE</Button>
                    </form>)

                    if(this.state.loading){
                      form =  <LoadingSpinner/>
                    }

        return(
            <div className = {classes.ContactData}>
                <h4>Please enter contact details</h4>
                    {form}
            </div>

        )                    
    }    
}

export default ContactDetails;