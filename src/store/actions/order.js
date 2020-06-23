import * as actionTypes from '../actions/actionTypes';
import axiosInstance from '../../order-axios';

export const saveOrderFormData=(id,orderData)=>{
    return{
        type:actionTypes.SUCCESS_ORDER_DATA,
        id:id,
        orderData:orderData
    };
};

export const failedOrderData=(error)=>{

    return{
        type:actionTypes.FAILED_ORDER_DATA,
        error:error
    };

};
export const purchaseStart=()=>{

    return{
        type:actionTypes.PURCHASE_START,
        loading:true
    };

};

export const onPuchaseInit=()=>{
return {
        type:actionTypes.ON_PURCHASE_INIT
    };
}


export const setOrderFormData=orderData=>{

    return dispatch=>{

        axiosInstance.post('/order.json',orderData)
        .then((response)=>{

        dispatch(saveOrderFormData(response.data,orderData));
        },err=>{

        this.setState({loading:false});
        dispatch(failedOrderData(err));
        });
    }

}


export const fetchOrdersSuccess=(orders)=>{
    return{
        type:actionTypes.FETCH_ORDER_SUCCESS,
        orders:orders
    };
};

export const fetchOrdersFail=(error)=>{
    return{
        type:actionTypes.FETCH_ORDER_FAIL,
        error:error
    };
};

export const fetchOrdersStart=()=>{
    return{
        type:actionTypes.FETCH_ORDERS_START
    };
};

export const fetchOrders=()=>{
        return dispatch=>{
            dispatch(fetchOrdersStart())
            axiosInstance.get('/order.json')
            .then(res=>{
                let fetchedOrders=[];
                for(let key in res.data){
                    fetchedOrders.push({
                        ...res.data[key],
                        id:key
                    });
                }
                console.log(res);
                    dispatch(fetchOrdersSuccess(fetchedOrders));
                    
            })
            .catch(err=>{
                console.log(err);
                dispatch(fetchOrdersFail(err));
            });


        }
}