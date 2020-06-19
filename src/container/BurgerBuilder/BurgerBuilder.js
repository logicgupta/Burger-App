import React, { Component } from 'react'
import Aux from '../../hoc/Aux/Aux'
import Burger from '../../components/Burger/Burger'
import BurgerControls from '../../components/Burger/BuildControls/BuildControls'
import Model from '../../components/UI/Model/Model'
import OrderSummary from '../../components/Burger/Ordersummary/OrderSummary';
import axiosInstance from '../../order-axios'
import Spinner from '../../components/UI/Spinner/Spinner'
import withErrorHandler from '../../components/withErrorHandler/withErrorHandler'
const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
};
class BurgerBuilder extends Component{

    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice: 4,
        purchasable: false,
        purchasing:false,
        loading:false
    }

    updatePurchaseState(ingredients){

        const sum=Object.keys(ingredients)
        .map(igKey=>{
            return ingredients[igKey];
        })
        .reduce((sum,el)=>{
            return sum+el;
        },0);
        this.setState({purchasable:sum>0});
        console.log('ss',this.state.purchasable);
    }

    addIngredientsHandler=(type)=>{
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;
        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;
        this.setState( { totalPrice: newPrice, ingredients: updatedIngredients } );
        this.updatePurchaseState(updatedIngredients);
    }


    removeIngredientsHandler=(type)=>{
            const oldCount=this.state.ingredients[type];
            let updatedCount=oldCount-1;
            if(updatedCount<0){
            return;
            }
            const updatedIngredients={
                ...this.state.ingredients
            }
            updatedIngredients[type]=updatedCount
            const priceDeduction=INGREDIENT_PRICES[type];
            const oldPrice=this.state.totalPrice;
            let newPrice=oldPrice-priceDeduction
            this.setState({
                totalPrice:newPrice,
                ingredients:updatedIngredients
            });
            this.updatePurchaseState(updatedIngredients);
    }

    puchaseHandler=()=>{
        this.setState({purchasing:true});
        console.log('Purcajdjsb');
    }

    cancelPurchaseHandler=()=>{
        this.setState({purchasing:false});
    }
    continuePurchaseHandler=()=>{

        this.setState({loading:true,purchasing:false});

        const order={
            ingredients:this.state.ingredients,
            price:this.totalPrice,
            customer:{
                name:'Logic Gupta',
                address:'Jhajjar',
                age:23
            }
        }

        axiosInstance.post('/order.json',order)
        .then((response)=>{

        this.setState({loading:false,purchasing:false});
            console.log(response);
        },err=>{

        this.setState({loading:false,purchasing:false});
        console.log(err)
        });
    }

    componentDidUpdate(){
        console.log('[BurgerBuilder.js]   Updated');
    }


    render(){
        const disabledInfo={
            ...this.state.ingredients
        }
        for(let key in disabledInfo){
            disabledInfo[key]=disabledInfo[key]<=0
        }
        //{  salad:false , meat :false ...}

       let ordummary=(<OrderSummary ingredients={ this.state.ingredients}
            cancelPurchase={this.cancelPurchaseHandler}
            sucessPurchase={this.continuePurchaseHandler}
            price={this.state.totalPrice}
            />);
            if(this.state.loading){
                ordummary=<Spinner/>
            }

        return (
                <Aux>
                    <Model purchasing={this.state.purchasing}
                        close={this.cancelPurchaseHandler}
                    >
                      {ordummary}
                    </Model>
                    <Burger ingredients={this.state.ingredients} />
                    <BurgerControls
                    ingredientsAdded={this.addIngredientsHandler}
                    ingredientsRemoved={this.removeIngredientsHandler}
                    disabled={disabledInfo}
                    totalPrice={this.state.totalPrice}
                    purchasable={this.state.purchasable}
                    purchasing={this.puchaseHandler}
                    />
                </Aux>
        )
    }
}

export default withErrorHandler(BurgerBuilder,axiosInstance);
