import React, { Component } from 'react'
import instanceAxios from '../../order-axios'
import Order from '../../components/Order/Order'
import  withErrorHandler from '../../components/withErrorHandler/withErrorHandler'
import * as orderActionTYpes from '../../store/actions/index'
import {connect} from 'react-redux'
import Spinner from '../../components/UI/Spinner/Spinner'

class Orders extends Component{
 
    state={
        orders:[],
        loading:false
    }

    componentDidMount(){
            this.props.onFetchOrders();
     }

    render(){
            let orders=this.props.orders.map(order=>{
                return <Order        
                             key={order.id} 
                             ingredients={order.ingredients}
                             price={order.price}
                
                         />
                 });
            if(this.props.loading){
                orders=<Spinner/>
            }     

        return(
            <div>
                {
                orders
                }
            </div>
        )
    }
}

const mapStateToProps=state=>{
    return {
        orders:state.order.orders,
        loading:state.order.loading
    }
}

const mapDispatchStateToProps=dispatch=>{
    return{
        onFetchOrders:()=>dispatch(orderActionTYpes.fetchOrders())
    }
}
export default connect(mapStateToProps,mapDispatchStateToProps) (withErrorHandler(Orders,instanceAxios));