import React from 'react'
import Aux from '../../../hoc/Aux'

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
        
        </Aux>
    );

}

export default orderSummary