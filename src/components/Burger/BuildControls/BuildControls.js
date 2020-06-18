import React from 'react'
import classes from '../BuildControls/BuildControls.module.css'
import BuildControl from './BuildControl/BuildControl.js'

const controls=[
    {label:'Salad',type:'salad'},
    {label:'Bacon',type:'bacon'},
    {label:'Meat',type:'meat'},
    {label:'Cheese',type:'cheese'}
]
const buildControls =(props)=>( 
<div className={classes.BuildControls}>
<p ><strong>Price : {props.totalPrice.toFixed(2)}</strong></p>
    {controls.map((ctrl)=>(
        <BuildControl  key={ctrl.label} 
         type={ctrl.type} 
         label={ctrl.label}
         added={props.ingredientsAdded}
         removed={props.ingredientsRemoved}
         disabled={props.disabled[ctrl.type]}
         />
    ))}

    <button  className={classes.OrderButton} 
    onClick={props.purchasing}
     disabled={!props.purchasable}>CHECK OUT</button>
</div>
)

export default buildControls;