import React,{Component} from 'react';
import {connect} from 'react-redux';

import Axios from '../../../anxios.orders';
import Button from '../../../components/UI/Button/Button';
import classes from './ContactDetails.css';
import LoadingSpinner from '../../../components/UI/LodingSpinner/LoadingSpinner';
import Input from '../../../components/UI/Input/Input';

class ContactDetails extends Component{

    state = {
        orderForm: {
            name: {
                elementtype: 'input',
                valid:false,
                touched:false,
                validation:{
                    required:true
                },
                elementconfig: {
                    type: 'text',
                    placeholder: 'Your Name'
                },
                value: ''
            },
            street: {
                elementtype: 'input',
                valid: false,
                touched:false,
                validation:{
                    required:true
                },
                elementconfig: {
                    type: 'text',
                    placeholder: 'Street'
                },
                value: ''
            },
            zipCode: {
                elementtype: 'input',
                valid:false,
                touched:false,
                validation:{
                    required:true,
                    maxLength :5
                },
                elementconfig: {
                    type: 'text',
                    placeholder: 'ZIP Code'
                },
                value: ''
            },
            country: {
                elementtype: 'input',
                valid:false,
                touched:false,
                validation:{
                    required:true
                },
                elementconfig: {
                    type: 'text',
                    placeholder: 'Country'
                },
                value: ''
            },
            email: {
                elementtype: 'input',
                valid:false,
                touched:false,
                validation:{
                    required:true
                },
                elementconfig: {
                    type: 'email',
                    placeholder: 'Your E-Mail'
                },
                value: ''
            },
            deliveryMethod: {
                elementtype: 'select',  
                validation:{
                   
                },
                elementconfig: {
                    options: [
                        {value: 'fastest', displayValue: 'Fastest'},
                        {value: 'cheapest', displayValue: 'Cheapest'}
                    ]
                },
                value: '',
                valid: true,                
            }
        },
        loading: false,
        formvalid:false
    }

    checkValidationhandler(inputValue,rules){
        let isvalid = true;        
        if(rules.required){
            isvalid =  inputValue.trim() !== '' && isvalid
        }
        if(rules.maxLength){
            isvalid = inputValue.length <= rules.maxLength && isvalid
        }    
        return isvalid;
    }
    
    orderHandler = (event)=>{
        event.preventDefault();
        this.setState({
            loading:true
        })

          let order = {}
          for(let i in this.state.orderForm){
            order[i] = this.state.orderForm[i].value;        
          }

          const customerOrder = {
              ingredients:this.props.ings,
              price:this.props.currentPrice,
              oderData:order
          }

             Axios.post('/orders.json',customerOrder)
                   .then(res=>{                     
                     this.setState({loading:false})
                     this.props.history.push('/')
                   })
                   .catch(err=>{
                   this.setState({loading:false})            
                 });                
                 this.props.history.push('/')
    
    }

    inputChangeHandler = (event,inputId)=>{
          
        const updatedOrderForm = {
             ...this.state.orderForm
            };
        const updatedElement = {
            ...updatedOrderForm[inputId]
        };

        updatedElement.value = event.target.value;
        updatedElement.valid = this.checkValidationhandler(updatedElement.value, updatedElement.validation)
        updatedElement.touched = true;
        updatedOrderForm[inputId] = updatedElement;

        let validForm = true;
         
        for(let element in updatedOrderForm){
            validForm = updatedOrderForm[element].valid && validForm
        }
        this.setState({
            orderForm:updatedOrderForm,
            formvalid:validForm
        })
    }

    render(){

          let elementArray = [];
          for(let key in this.state.orderForm){              
            elementArray.push({
               id:key,
               config:this.state.orderForm[key]
            })
          }

        let form = (<form onSubmit = {this.orderHandler}>                
                       {
                         elementArray.map(element =>{
                             return(
                                 <Input key = {element.id}
                                        elementtype={element.config.elementtype}
                                        elementconfig = {element.config.elementconfig}
                                        value={element.config.value}
                                        touched = {element.config.touched}
                                        invalid = {!element.config.valid}
                                        clicked = {(event) => this.inputChangeHandler(event,element.id)} />
                             )
                         })
                       }
                     <Button btnType = 'Success'
                             disabled = {!this.state.formvalid}
                             >DONE</Button>
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

const mapsStateToProps = state=>{
    return{
        ings:state.ingredients,
        currentPrice:state.currentPrice 
    }
}

export default connect(mapsStateToProps)(ContactDetails);