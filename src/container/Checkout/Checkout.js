import React,{Component} from 'react';
import CheckoutSummary from '../../components/Order/CheckoutSummary/Checkoutsummary'
import ContactData from'../Checkout/ContactData/ContactData'
import {Route,Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
class Checkout extends Component{
    cancelledCheckoutHandler=()=>{
        this.props.history.goBack();
    }

    successCheckoutHandler=()=>{
        this.props.history.replace('/checkout/contact-order');
    }

    render(){
        let checkout=<Redirect to="/"/>
        if(this.props.ings){
              let purchasedRediect =this.props.purchased ? <Redirect to='/'/> :null
                checkout=( <div>
                    {purchasedRediect}
                    <CheckoutSummary ingredients={this.props.ings} 
                    cancelled={this.cancelledCheckoutHandler}
                    success={this.successCheckoutHandler}
                    />
                    <Route path={this.props.match.path +'/contact-order'} 
                    component={ContactData}/>
            
                </div>)
            }
        return(
            <div>
            {checkout}
            </div>
           
        )

    }
}

const mapStateToProps=state=>{
    return{
        ings:state.burgerBuilder.ingredients,
        purchased:state.order.purchased
    };
};

export default connect(mapStateToProps) (Checkout);