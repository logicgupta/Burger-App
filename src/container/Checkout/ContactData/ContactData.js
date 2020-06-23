import React,{Component} from 'react'
import classes from '../ContactData/ContactData.module.css'
import Spinner from '../../../components/UI/Spinner/Spinner'
import Input from '../../../components/UI/Input/Input'
import {connect} from 'react-redux';
import * as orderActionTypes from '../../../store/actions/index'
class ContactData extends Component{

    state={
        orderForm:{
            name:{
                elementType:'input',
                elementConfig:{
                    type:'input',
                    placeholder:'Your Name'
                },
                value:''
                
            },
            email:{
                elementType:'input',
                elementConfig:{
                    type:'input',
                    placeholder:'Your Email'
                },
                value:''
                
            },
           
                street:{
                    elementType:'input',
                    elementConfig:{
                        type:'Street',
                        placeholder:'Street'
                    },
                    value:''
                    
                },
                postalCode:{
                    elementType:'input',
                    elementConfig:{
                        type:'input',
                        placeholder:'ZIP CODE'
                    },
                    value:''
                    
                },
                deliveryMethod:{
                    elementType:'select',
                    elementConfig:{
                        options:[
                            {value:'fastest',displayValue:'Fastest'},
                            {value:'cheapest',displayValue:'Cheapest'}
                        ]
                    }
                }

        }
    }

    onContactUsHandler=(event)=>{
            event.preventDefault();
        const fromData={};
        for(let elementIndentifier in this.state.orderForm){
             fromData[elementIndentifier]=this.state.orderForm[elementIndentifier].value;
        }

        const order={
            ingredients:this.props.ings,
            price:this.props.price,
            orderData:fromData
        }
        this.props.onsubmitOrderData(order);

    }

    OnChangeHandler=(event,indentifier)=>{
        let updatedFormData={
            ...this.state.orderForm
        }
        const updatedFormElement={
            ...updatedFormData[indentifier]
        };
        updatedFormElement.value=event.target.value;
        updatedFormData[indentifier]=updatedFormElement;
        this.setState({orderForm:updatedFormData});
    }


    render(){
    
        const formElementArray=[];
        for(let key in this.state.orderForm){
            formElementArray.push({
                id:key,
                elementConfig:this.state.orderForm[key]
            });
        }


        let data =<div  className={classes.ContactData}>
                        <h4>Enter Your Contact Data</h4>
                        <form  onSubmit={this.onContactUsHandler}>
                            {formElementArray.map(formElement=>{
                              return  <Input 
                              key={formElement.id}
                              elementType={formElement.elementConfig.elementType}
                                elementConfig={formElement.elementConfig.elementConfig} 
                                value={formElement.elementConfig.value}
                                change={(event)=>this.OnChangeHandler(event,formElement.id)}
                                ></Input>
                            })}
                            <button >CONTINUE</button>
                        </form>
                    </div>
        if(this.props.loading){
            data=<Spinner/>
        }

        return(
            <div >
                {data}
            </div>
        )
    }


}

const mapStateToProps=state=>{
return{
    ings:state.burgerBuilder.ingredients,
    price:state.burgerBuilder.totalPrice,
    loading:state.order.loading
}
}

const mapDispatchToprops=dispatch=>{
    return{
        onPurchaseStart:()=>dispatch(orderActionTypes.purchaseStart),
        onsubmitOrderData:(orderData)=>dispatch(orderActionTypes.setOrderFormData(orderData))
    };
}

export default connect(mapStateToProps,mapDispatchToprops) (ContactData);