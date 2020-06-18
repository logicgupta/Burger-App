import React from 'react'
import burgerLogo from '../../assets/Images/burger-logo.png'
import classes from '../Logo/Logo.module.css'

const logo =(props)=>(
    <div className={classes.Logo}>
        <img src={burgerLogo} alt="MyBurger"></img>
    </div>
);
export default logo