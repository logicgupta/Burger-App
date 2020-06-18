import React, { Component } from 'react'
import Aux from '../../hoc/Aux/Aux'
import styles from '../Layout/Layout.module.css'
import Toolbar from '../../components/Navigation/Toolbar/Toolbar'
import SideDrawer from '../../components/SideDrawer/SideDrawer'


class  Layout  extends Component{

    state={
        showSideDrawer:false
    }

    sideDrawerClosedHandler=()=>{
        this.setState({showSideDrawer:false})
    }

    sideDrawerToggleHandler=()=>{
        this.setState((prevState)=>{
            return {showSideDrawer:!prevState.showSideDrawer};
        })
    }

    render(){
        return(
            <Aux>
        <Toolbar  clicked={this.sideDrawerToggleHandler}/>
        <SideDrawer  open ={this.state.showSideDrawer} closed={this.sideDrawerClosedHandler}/>
        <div >  BackDrop </div>
        <main className={styles.Content}>
            {this.props.children}
        </main>
    </Aux>
        )
    }
}


export default Layout;