import React,{Component} from 'react'
import Button from '../../../components/UI/Button/Button'
import classes from '../ContactData/ContactData.module.css'
import axiosInstance from '../../../order-axios'
import Spinner from '../../../components/UI/Spinner/Spinner'
import Input from '../../../components/UI/Input/Input'

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

        },

        loading:false
    }

    onContactUsHandler=(event)=>{
            event.preventDefault();
        this.setState({loading:true});
        const fromData={};
        for(let elementIndentifier in this.state.orderForm){
             fromData[elementIndentifier]=this.state.orderForm[elementIndentifier].value;
        }

        const order={
            ingredients:this.props.ingredients,
            price:this.props.price,
            orderData:fromData
        }

        axiosInstance.post('/order.json',order)
        .then((response)=>{

        this.setState({loading:false}); 
        this.props.history.push('/')
            console.log(response);
        },err=>{

        this.setState({loading:false});
        console.log(err)
        });

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
        if(this.state.loading){
            data=<Spinner/>
        }

        return(
            <div >
                {data}
            </div>
        )
    }


}
export default ContactData;