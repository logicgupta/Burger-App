import React, { Component } from 'react'
import Model from '../UI/Model/Model'
import Aux from "../../hoc/Aux/Aux";

const withErrorHandler=(WrapperComponent,axios)=>{

    return class extends Component{
        state={
            error:null   
        }

        componentDidMount(){
            axios.interceptors.request.use(req=>{
                this.setState({error:null});
                return req;
            });
            axios.interceptors.response.use(res=> res,error=>{
                this.setState({error:error});
                console.log(error);
                
            });
        }
        errorConfirmedHandler=()=>{
            this.setState({error:null});
        }
        render(){
            return(
            <Aux>
                <Model
                purchasing={this.state.error}
                close={this.errorConfirmedHandler}
                    >
                        {this.state.error ? this.state.error.message :null}
                </Model>
                <WrapperComponent {...this.props}/>
            </Aux>
            );
        }


    }
}

export default withErrorHandler