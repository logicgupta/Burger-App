import React from 'react';
import classes from '../../UI/Input/Input.module.css'
const input =(props)=>{
    let inputelement=null;

    
    switch (props.elementType) {
        case ('input'):
            inputelement=<input 
            className={classes.InputElement}
             {...props.elementConfig } 
             value={props.value}
             onChange={props.change} />
            break;
        case('textarea'):
        inputelement=<textarea
          className={classes.InputElement}{...props.elementConfig } 
        value={props.value}
        onChange={props.change} />
        break;
        case('select'):
        inputelement=<select 
         className={classes.InputElement}
        value={props.value} >
               { props.elementConfig.options.map(option=>{
                   return <option key={option.value}
                        value={option.value} 
                        onChange={props.change}
                        >
                       {option.displayValue}
                   </option>
               })}
            </select>
        break;
        default:
            inputelement=<input className={classes.InputElement} {...props.elementConfig } 
            value={props.value} 
            onChange={props.change}
            />
            break;
    }
    return(
        <div className={classes.Input}>
        <label >{props.label}</label>
        {inputelement}
        </div>
    )

}
export default input