import React, { Component } from 'react'
import instanceAxios from '../../order-axios'
import Order from '../../components/Order/Order'
import  withErrorHandler from '../../components/withErrorHandler/withErrorHandler'
class Orders extends Component{
 
    state={
        orders:[],
        loading:false
    }

    componentDidMount(){
            instanceAxios.get('/order.json')
            .then(res=>{
                let fetchedOrders=[];
                for(let key in res.data){
                    fetchedOrders.push({
                        ...res.data[key],
                        id:key
                    });
                }
                console.log(res);
                    this.setState({loading:false,orders:fetchedOrders});
            })
            .catch(err=>{
                console.log(err);
                this.setState({loading:false});
            })
    }

    render(){
        return(
            <div>
                {
                this.state.orders.map(order=>{
               return <Order        
                            key={order.id} 
                            ingredients={order.ingredients}
                            price={order.price}
               
                        />
                })
                }
            </div>
        )
    }
}
export default withErrorHandler(Orders,instanceAxios);