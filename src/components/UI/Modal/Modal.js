import React,{Component} from 'react';
import PropTypes from 'prop-types';

import classes from './Modal.css';
import Aux from '../../../hoc/Auxi';
import BackDrop from '../BackDrop/BackDrop';


class Modal extends Component{

  shouldComponentUpdate(nextProps){
     return nextProps.show !== this.props.show||nextProps.children !==this.props.children
  }


    render(){
        return(
            <Aux>
              <BackDrop show = {this.props.show}
                        backDropClick = {this.props.modalCancel} />
             <div className = {classes.Modal}
                 style = {{
                     transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
                     opacity:this.props.show?'1':'0'
                 }}>
                {this.props.children}
             </div>
            </Aux>
        
        )
    }

}

export default Modal;