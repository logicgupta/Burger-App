import React from 'react'
import classes from '../BuildControl/BuildControl.module.css'

const buildControl=(prop)=>(

    <div className={classes.BuildControl}>
        <div className={classes.Label} >{prop.label}</div>
        <button
         className={classes.Less}
         onClick={()=>prop.removed(prop.type)}
         disabled={prop.disabled}
        >Less</button>
        <button className={classes.More}
          onClick={()=>prop.added(prop.type)}
        >More</button>
    </div>
    
);

export default buildControl