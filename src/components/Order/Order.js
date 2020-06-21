import React from 'react'
import classes from '../Order/Order.module.css'
const order=(props)=>{

    let  ingredients=[];

    for( let ingredeintsName in props.ingredients ){
        ingredients.push({
            name:ingredeintsName,
            amount:props.ingredients[ingredeintsName]
        })
    }

    const ingredientsOutput=
    ingredients.map(ig=>{
        return<span key={ig.name}
        style={{textTransform:'capitalize'
            ,display:'inline-block',
            margin:'4px',
            padding:'4px',
        border:'1px solid #cccccc'}}
        
        >{ig.name} ( {ig.amount})</span>
    })

    return(
        <div  className={classes.Order}> 
    <p> Ingredients: {ingredientsOutput}</p>
    <p><strong>Price :</strong>{Number.parseFloat(props.price).toFixed(2)}</p>
</div>
    )
}
export default order;