import React, { Component } from 'react';
import {connect} from 'react-redux';
import Aux from '../../hoc/Aux/Aux';
import Burger from '../../components/Burger/Burger';
import BurgerControls from '../../components/Burger/BuildControls/BuildControls'
import Model from '../../components/UI/Model/Model'
import OrderSummary from '../../components/Burger/Ordersummary/OrderSummary';
import axiosInstance from '../../order-axios'
import Spinner from '../../components/UI/Spinner/Spinner'
import withErrorHandler from '../../components/withErrorHandler/withErrorHandler'
import * as action from '../../store/actions/index'

class BurgerBuilder extends Component{

    state = {
        purchasable: false,
        purchasing:false,
        loading:false
    }

        // Dynamic Ingredients API FIREBASE
        componentDidMount(){
            this.props.onFetchIngredients()
        }

    updatePurchaseState(ingredients){

        const sum=Object.keys(ingredients)
        .map(igKey=>{
            return ingredients[igKey];
        })
        .reduce((sum,el)=>{
            return sum+el;
        },0);
        return sum>0;
    }
    puchaseHandler=()=>{
        this.setState({purchasing:true});
    }

    cancelPurchaseHandler=()=>{
        this.setState({purchasing:false});
    }
    continuePurchaseHandler=()=>{
        this.props.history.push({
            pathname:'/checkout'
        });
    }

    render(){
        const disabledInfo={
            ...this.props.ings
        }
        for(let key in disabledInfo){
            disabledInfo[key]=disabledInfo[key]<=0
        }
        //{  salad:false , meat :false ...}

       let ordummary=null
            if(this.state.loading){
                ordummary=<Spinner/>
            }
            let burger=<Spinner/>
          burger=  this.props.error ? 'Error Occured While Fetching ....':<Spinner/>
            if(this.props.ings){
                burger=(
                    <Aux>
                        <Burger ingredients={this.props.ings} />
                        <BurgerControls
                        ingredientsAdded={this.props.onIngredientsAdded}
                        ingredientsRemoved={this.props.onIntegredientsRemmoved}
                        disabled={disabledInfo}
                        totalPrice={this.props.price}
                        purchasable={this.updatePurchaseState(this.props.ings)}
                        purchasing={this.puchaseHandler}
                        />
                    </Aux>

            );
            ordummary=(<OrderSummary ingredients={ this.props.ings}
                cancelPurchase={this.cancelPurchaseHandler}
                sucessPurchase={this.continuePurchaseHandler}
                price={this.props.price}
                />);
            }


        return (
                <Aux>
                    <Model purchasing={this.state.purchasing}
                        close={this.cancelPurchaseHandler}
                    >
                      {ordummary}
                    </Model>
                    {burger}
                </Aux>
        )
    }
}

const mapStateToProps=state=>{
    return{
        ings:state.burgerBuilder.ingredients,
        price:state.burgerBuilder.totalPrice,
        error:state.burgerBuilder.error
    };
};

const mapDispatchToProps=dispatch=>{
  return{
    onIngredientsAdded:(ingName)=>dispatch(action.addIngredients(ingName)),
    onIntegredientsRemmoved:(ingName)=>dispatch(action.removeIngredients(ingName)),
    onFetchIngredients:()=>dispatch(action.setIngredients()),
    onPurchaseInit:()=>dispatch(action.onPuchaseInit())

  }  

} 

export default connect(mapStateToProps,mapDispatchToProps) (withErrorHandler(BurgerBuilder,axiosInstance));
