import axios from "axios";
import {
    ALL_PRODUCT_REQUEST,
     ALL_PRODUCT_SUCCESS ,
      ALL_PRODUCT_FAIL,
      PRODUCT_DETAILS_REQUEST,
      PRODUCT_DETAILS_SUCCESS,
      PRODUCT_DETAILS_FAIL,
       CLEAR_ERRORS,
} from "../constants/productConstants";

export const getProduct = () => async (dispatch) => {
    try {  
        
dispatch({ type:ALL_PRODUCT_REQUEST });

const {data} = await axios.get("/products");

dispatch({
    type:ALL_PRODUCT_SUCCESS,
    payload:data,
})

    } catch (error) {
        dispatch({
            type: ALL_PRODUCT_FAIL,
            payload:error.response.data.message,
        });
        
    }

};
 

// GET SINGLE PRODUCTS

export const getProductDetails = (id) => async (dispatch) => {
    try {  
        
dispatch({ type:PRODUCT_DETAILS_REQUEST });

const {data} = await axios.get(`/product/${id}`);

dispatch({
    type:PRODUCT_DETAILS_SUCCESS,
    payload:data,
})

    } catch (error) {
        dispatch({
            type: PRODUCT_DETAILS_FAIL,
            payload:error.response.data.message,
        });
        
    }

};



// CLEARING ERROR
export const clearErrors = () => async (dispatch) => {
dispatch({type:CLEAR_ERRORS});
}
 