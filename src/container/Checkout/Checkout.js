import React,{Component} from 'react';
import CheckoutSummary from '../../components/Order/CheckoutSummary/Checkoutsummary'
import ContactData from'../Checkout/ContactData/ContactData'
import {Route} from 'react-router-dom'
class Checkout extends Component{

    state={
        ingredients:{
            salad:0,
            meat:0,
            cheese:0,
            bacon:0
        },
        price:0
    }

    componentWillMount(){
        console.log(this.props)
        const query=new URLSearchParams(this.props.location.search);
        const ingredients={};
        let price=0;
      
        for (let param of query.entries()){
            // ['salad':'1']
            console.log(param[0]);
            if(param[0]==='price'){
                price=param[1];
                console.log('Pricw'+price);
            }
            else{
                ingredients[param[0]] =+param[1];

            }
            console.log(param[1]);
        }
        this.setState({
            ingredients:ingredients,
            price:price
        });
        console.log(ingredients);
    }

    cancelledCheckoutHandler=()=>{
        this.props.history.goBack();
    }

    successCheckoutHandler=()=>{
        this.props.history.replace('/checkout/contact-order');
    }

    render(){
        return(
            <div>
                <CheckoutSummary ingredients={this.state.ingredients} 
                cancelled={this.cancelledCheckoutHandler}
                success={this.successCheckoutHandler}
                />
                <Route path={this.props.match.path +'/contact-order'} 
                render={(props)=>(<ContactData  ingredients={this.state.ingredients}
                    price={this.state.price}
                    {...props}

                />)}/>
            </div>
        )

    }

}

export default Checkout;