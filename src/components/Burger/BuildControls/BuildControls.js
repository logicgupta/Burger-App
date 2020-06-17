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
    {controls.map((ctrl)=>(
        <BuildControl  key={ctrl.label}  type={ctrl.type} label={ctrl.label}/>
    ))}
</div>
)

export default buildControls;