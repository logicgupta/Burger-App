import React, { Component } from 'react'
import classes from '../Model/Model.module.css'
import Aux from '../../../hoc/Aux/Aux'
import BackDrop from '../Backdrop/Backdrop'
class Model extends Component{

    shouldComponentUpdate(nextProps,nextSate){
        return nextProps.purchasing!==this.props.purchasing  || nextProps.children!==this.props.children;
    }
    componentDidUpdate(){
        console.log('Model.js');
    }

    render(){
        return(
        <Aux >
            <BackDrop show={this.props.purchasing} clicked={this.props.close}></BackDrop>
        <div className={classes.Modal}
                style={{ transform :this.props.purchasing ? 'translateY(0)':'translateY(-100vh)',
                        opacity:this.props.purchasing ? '1':'0'}}
                >
                {this.props.children}
            </div>
        </Aux>
        )
    }
} 
export default Model;