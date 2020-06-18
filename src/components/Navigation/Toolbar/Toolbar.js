import React from 'react'
import classes from '../Toolbar/Toolbar.module.css'
import Logo from '../../Logo/Logo.js'
import NavigationItems from '../NavigationItems/NavigationItems'
import DrawerToggle from '../../DrawerToggle/DrawerToggle'

const toolbar=(props)=>(
    <header className={classes.Toolbar}>
        <DrawerToggle  clicked={props.clicked}/>
        <div className={classes.Logo}>
        <Logo></Logo>
        </div>
        <nav className={classes.DesktopOnly}>
        <NavigationItems></NavigationItems>
        </nav>
    </header>
)
export default toolbar