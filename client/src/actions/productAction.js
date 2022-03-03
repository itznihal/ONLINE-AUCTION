import axios from "axios";
import {
    ALL_PRODUCT_REQUEST,
     ALL_PRODUCT_SUCCESS ,
      ALL_PRODUCT_FAIL,
      PRODUCT_DETAILS_REQUEST,
      PRODUCT_DETAILS_SUCCESS,
      PRODUCT_DETAILS_FAIL,
       CLEAR_ERRORS,
       NEW_PRODUCT_REQUEST,
       NEW_PRODUCT_SUCCESS,
       NEW_PRODUCT_FAIL,
       DELETE_PRODUCT_REQUEST,
       DELETE_PRODUCT_SUCCESS,
       DELETE_PRODUCT_FAIL,
       UPDATE_PRODUCT_REQUEST,
      UPDATE_PRODUCT_SUCCESS,
      UPDATE_PRODUCT_FAIL,
       BIDDED_PRODUCT_REQUEST,
       BIDDED_PRODUCT_SUCCESS,
       BIDDED_PRODUCT_FAIL,
       SELLER_PRODUCT_REQUEST,
       SELLER_PRODUCT_SUCCESS,
       SELLER_PRODUCT_FAIL,
} from "../constants/productConstants";

export const getProduct = (keyword="" , currentPage=1 , price = [0, 2500000] , category) => async (dispatch) => {
    try {  
        
dispatch({ type:ALL_PRODUCT_REQUEST });
// startingBid[gte]=400&startingBid[lt]=2000
let link = `/products?keyword=${keyword}&page=${currentPage}&startingBid[gte]=${price[0]}&startingBid[lt]=${price[1]}`;

if(category){
    link = `/products?keyword=${keyword}&page=${currentPage}&startingBid[gte]=${price[0]}&startingBid[lt]=${price[1]}&category=${category}`;
}

const {data} = await axios.get(link);

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



// CREATE PRODUCT


export const createProduct = (productData) => async (dispatch) => {
    try {  
        
dispatch({ type:NEW_PRODUCT_REQUEST });


const config = {
headers: {"Content-Type":"application/json"},
};


const {data} = await axios.post(`/product/new`,
productData,
config
);

dispatch({
    type:NEW_PRODUCT_SUCCESS,
    payload:data,
});

    } catch (error) {
        dispatch({
            type:  NEW_PRODUCT_FAIL,
            payload:error.response.data.message,
        });
        
    }

};


// DELETE PRODUCT



export const deleteProduct = (id) => async (dispatch) => {
    try {  
        
dispatch({ type:DELETE_PRODUCT_REQUEST });





const {data} = await axios.delete(`/product/${id}`,);

dispatch({
    type:DELETE_PRODUCT_SUCCESS,
    payload:data.success,
});

    } catch (error) {
        dispatch({
            type:   DELETE_PRODUCT_FAIL,
            payload:error.response.data.message,
        });
        
    }

};



// UPDATE PRODUCT


export const updateProduct = (id , productData) => async (dispatch) => {
    try {  
        
dispatch({ type:UPDATE_PRODUCT_REQUEST });


const config = {
headers: {"Content-Type":"application/json"},
};


const {data} = await axios.put(`/product/${id}`,
productData,
config
);

dispatch({
    type: UPDATE_PRODUCT_SUCCESS,
    payload:data.success,
});

    } catch (error) {
        dispatch({
            type:  UPDATE_PRODUCT_FAIL,
            payload:error.response.data.message,
        });
        
    }

};




// GET BIDDED PRODUCTS


export const getBiddedProducts = () => async (dispatch) => {
    try {  
        
dispatch({ type:BIDDED_PRODUCT_REQUEST });

const {data} = await axios.get(`/products/bidstatus`);

dispatch({
    type:BIDDED_PRODUCT_SUCCESS,
    payload:data,
})

    } catch (error) {
        dispatch({
            type: BIDDED_PRODUCT_FAIL,
            payload:error.response.data.message,
        });
        
    }

};




// GET SELLER PRODUCTS


export const getSellerProducts = () => async (dispatch) => {
    try {  
        
dispatch({ type:SELLER_PRODUCT_REQUEST });

const {data} = await axios.get(`/products/myproducts`);

dispatch({
    type:SELLER_PRODUCT_SUCCESS,
    payload:data,
})

    } catch (error) {
        dispatch({
            type: SELLER_PRODUCT_FAIL,
            payload:error.response.data.message,
        });
        
    }

};



// CLEARING ERROR
export const clearErrors = () => async (dispatch) => {
dispatch({type:CLEAR_ERRORS});
}
 