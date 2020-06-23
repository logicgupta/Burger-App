import  * as actionTypes from '../actions/actionTypes';
import axiosInstance from './../../order-axios';
export const addIngredients=(val)=>{
    return{
        type:actionTypes.ADD_INGREDIENTS,
        ingredientName:val
    };
};


export const removeIngredients=(val)=>{
    return{
        type:actionTypes.REMOVE_INGREDIENTS,
        ingredientName:val
    };
};

export const saveIngredients=(ingredients)=>{

    return{
        type:actionTypes.SET_INGREDIENTS,
        ingredients:ingredients
    }
}

export const setError=()=>{
    return{
        type:actionTypes.SET_ERROR,
        error:true
    };
};


export const setIngredients=(dispatch)=>{
    return dispatch=>{
         axiosInstance.get('https://my-burger-react-app-b90db.firebaseio.com/ingredients.json')
        .then(res=>{
                dispatch(saveIngredients(res.data));
        })
        .catch(err=>{
                dispatch(setError());
        });
    }
}
