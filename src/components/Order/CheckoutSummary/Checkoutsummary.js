import React from 'react';
import Burger from '../../Burger/Burger'
import classes from '../CheckoutSummary/CheckoutSummary.module.css'
import Button from '../../UI/Button/Button'

const checkoutSummary=(props)=>{
    return (
        <div className={classes.CheckoutSummary}>
            <h1>we hope it tastes well!</h1>
            <div style={{ width:'100%',margin:'auto'}}>
                <Burger ingredients={props.ingredients} />
            </div>
            <Button btnType="Danger" 
            clicked={props.cancelled}
            >CANCEL</Button> 
             <Button btnType="Success" clicked={props.success}>Success</Button>
        </div>
    )

}

export default checkoutSummary