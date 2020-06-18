import React from 'react'
import Aux from '../../../hoc/Aux/Aux'
import Button from '../../../components/UI/Button/Button'

const orderSummary=(props)=>{

    const ingredientSummary=Object.keys(props.ingredients)
                .map(igKey=>{
                    return (
                        <li key={igKey}>
                        <span style={{transform:'captialize'}}>{igKey } : {props.ingredients[igKey]}</span>
                        </li>
                    )
                    
                });
    return (
        <Aux>
            <h3> Your Order</h3>
            <p>A delecious burger with the following ingredients:</p>
            <ol>
                {ingredientSummary}
            </ol>
    <p> <strong>Total price : {props.price.toFixed(2)}</strong></p>
            <p> Continue to checkout ?</p>
            <Button btnType="Danger"  clicked={props.cancelPurchase}>CANCEL</Button>
            <Button btnType="Success"  clicked={props.sucessPurchase}>CONTINUE</Button>             
        </Aux>
    );

}

export default orderSummary