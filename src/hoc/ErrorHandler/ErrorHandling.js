import React,{ Component } from 'react';

import Modal from '../../components/UI/Modal/Modal';
import Aux from '../Auxi';

const errorHandler = (WrappedComponent,axios)=>class extends Component{        
        state = {
            error:null
        }
        
        componentDidMount(){
            axios.interceptors.request.use(req=>{
                                                   this.setState({...this.state,error:null})
                                                   return req                                                   
                                                });                                


            axios.interceptors.response.use(res=>res,
                                            err=>{
                                                  console.log(err) 
                                                  this.setState({ error:err})
                                                });            
        }

          clickHandler = ()=>{
              this.setState({
                  error:null
              })
          }
                
            render(){
             
                return (
                    <Aux>
                       <Modal show ={this.state.error}
                              backDropClick = {this.clickHandler} >
                            {this.state.error ? this.state.error.message : null}
                         </Modal>
                       <WrappedComponent {...this.props}/>
                    </Aux>
                )
            } 
    }

export default errorHandler;