import React from 'react'
import Logo from '../Logo/Logo'
import NavigationItems from '../Navigation/NavigationItems/NavigationItems'
import classes from '../SideDrawer/SideDrawer.module.css'
import Aux from '../../hoc/Aux/Aux'
import BackDrop from '../../components/UI/Backdrop/Backdrop'
const sideDrawer=(props)=>
{

    let attachedClasses=[classes.SideDrawer , classes.Close];
    if(props.open){
        attachedClasses=[classes.SideDrawer,classes.Open];
    }

    return(
       <Aux>
           <BackDrop show={props.open} clicked={props.closed} />
            <div className={attachedClasses.join(' ')}>
                <div className={classes.Logo}> 
                <Logo/>
                </div>
                <nav>
                        <NavigationItems/>
                </nav>
                </div>
       </Aux>
    )
}

export default sideDrawer