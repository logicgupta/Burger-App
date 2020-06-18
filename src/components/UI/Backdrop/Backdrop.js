import React from 'react'
import classes from '../Backdrop/Backdrop.module.css'

const backdrop=(prop)=>(
    prop.show ? <div className={classes.BackDrop} onClick={prop.clicked}></div> :null
)
export default backdrop