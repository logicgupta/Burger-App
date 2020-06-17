import React from 'react'
import Aux from '../../hoc/Aux'
import styles from '../Layout/Layout.module.css'

const layout =(props)=><Aux>
        <div > Toolbar,  Navigation , BackDrop </div>
        <main className={styles.Content}>
            {props.children}
        </main>
    </Aux>



export default layout;