import * as actionTypes from './../actions/actionTypes';

const initialState={
    orders:[],
    loading:false,
    purchased:false
}
  const reducer=(state=initialState,action)=>{
    switch (action.type) {


        case actionTypes.ON_PURCHASE_INIT:
            return{
                ...state,
                purchased:false
            }

        case actionTypes.PURCHASE_START:
            return{
                ...state,
                loading:true
            };

        case actionTypes.SUCCESS_ORDER_DATA:
        const newOrders ={
            ...action.orders,
            id:action.id
        } ; 
        return{
                ...state,
                loading:false,
                orders:state.orders.concat(newOrders),
                purchased:true
            };
        case  actionTypes.FAILED_ORDER_DATA:
            return{
                ...state,
                loading:true,
                purchased:false
            };
        case actionTypes.FETCH_ORDERS_START:
            return{
                ...state,
                loading:true
            }

        case actionTypes.FETCH_ORDER_SUCCESS:
            return{
                ...state,
                orders:action.orders,
                loading:false
            };

        case actionTypes.FETCH_ORDER_FAIL:
            return{
                ...state,
                error:action.error
            }
        default:
                return state;
    }
}
export default reducer;