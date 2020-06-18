import React from 'react'
import classes from '../Model/Model.module.css'
import Aux from '../../hoc/Aux'
import BackDrop from '../Backdrop/Backdrop'
const model =(props)=>(
<Aux >
    <BackDrop show={props.purchasing} clicked={props.close}></BackDrop>
<div className={classes.Modal}
        style={{ transform :props.purchasing ? 'translateY(0)':'translateY(-100vh)',
                opacity:props.purchasing ? '1':'0'}}
        >
        {props.children}
    </div>
</Aux>
)

export default model;