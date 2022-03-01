import {
    ALL_PRODUCT_REQUEST,
     ALL_PRODUCT_SUCCESS ,
      ALL_PRODUCT_FAIL,
      PRODUCT_DETAILS_REQUEST,
      PRODUCT_DETAILS_SUCCESS,
      PRODUCT_DETAILS_FAIL,
      NEW_PRODUCT_REQUEST,
      NEW_PRODUCT_SUCCESS,
      NEW_PRODUCT_RESET,
      NEW_PRODUCT_FAIL,
      BIDDED_PRODUCT_REQUEST,
      BIDDED_PRODUCT_SUCCESS,
      BIDDED_PRODUCT_FAIL,
      SELLER_PRODUCT_REQUEST,
      SELLER_PRODUCT_SUCCESS,
      SELLER_PRODUCT_FAIL,

       CLEAR_ERRORS
} from "../constants/productConstants";

export const productReducer = (state = { products: [] }, action) =>{

switch (action.type) {
    case ALL_PRODUCT_REQUEST:
        return{
            loading:true,
            product:[],
        };

        case ALL_PRODUCT_SUCCESS:
        return{
            loading:false,
            products:action.payload.products,
            productCount:action.payload.productCount,
            resultPerPage:action.payload.resultPerPage,
        };

        case ALL_PRODUCT_FAIL:
        return{
            loading:false,
            error: action.payload,
        };
        
        case CLEAR_ERRORS:
        return{
            ...state,
            error: null,          
        };

    default:
        return state;
}

};


// FOR SINGLE PRODUCT DETAILS

export const productDetailsReducer = (state = { product: {} }, action) =>{

    switch (action.type) {
        case PRODUCT_DETAILS_REQUEST:
            return{
                loading:true,
                ...state,
            };
    
            case PRODUCT_DETAILS_SUCCESS:
            return{
                loading:false,
                product:action.payload.product,
                sellerDetails:action.payload.sellerDetails,
                winStatus:action.payload.winStatus,
            };
    
            case PRODUCT_DETAILS_FAIL:
            return{
                loading:false,
                error: action.payload,
            };
            
            case CLEAR_ERRORS:
            return{
                ...state,
                error: null,          
            };
    
        default:
            return state;
    }
    
    };

    // NEW_PRODUCT_REQUEST,
    // NEW_PRODUCT_SUCCESS,
    // NEW_PRODUCT_RESET,
    // NEW_PRODUCT_FAIL,
    // CREATE PRODUCT

    export const newProductReducer = (state = { product: {} }, action) =>{

        switch (action.type) {
            case NEW_PRODUCT_REQUEST:
                return{
                    ...state,
                    loading:true,
                };
        
                case NEW_PRODUCT_SUCCESS:
                return{
                    loading:false,
                    success:action.payload.success,
                    product:action.payload.product,
                };

                case NEW_PRODUCT_FAIL:
                return{
                    ...state,
                    loading:false,
                    error: action.payload,
                };

                case NEW_PRODUCT_RESET:
                return{
                 ...state,
                 success:false,
                };
        
                
                case CLEAR_ERRORS:
                return{
                    ...state,
                    error: null,          
                };
        
            default:
                return state;
        }
        
        };
    


        // BIDDED PRODUCT REDUCER
        export const biddedproductReducer = (state = { myproducts: [] }, action) =>{

            switch (action.type) {
                case BIDDED_PRODUCT_REQUEST:
                    return{
                        loading:true,
                        myproduct:[],
                    };
            
                    case BIDDED_PRODUCT_SUCCESS:
                    return{
                        loading:false,
                        myproducts:action.payload.myproducts,
                        
                    };
            
                    case BIDDED_PRODUCT_FAIL:
                    return{
                        loading:false,
                        error: action.payload,
                    };
                    
                    case CLEAR_ERRORS:
                    return{
                        ...state,
                        error: null,          
                    };
            
                default:
                    return state;
            }
            
            };




            // SELLLER PRODUCT REDUCER
             
        export const sellerproductReducer = (state = { sellerproducts: [] }, action) =>{

            switch (action.type) {
                case SELLER_PRODUCT_REQUEST:
                    return{
                        loading:true,
                        sellerproduct:[],
                    };
            
                    case SELLER_PRODUCT_SUCCESS:
                    return{
                        loading:false,
                        sellerproducts:action.payload.sellerproducts,
                        
                    };
            
                    case SELLER_PRODUCT_FAIL:
                    return{
                        loading:false,
                        error: action.payload,
                    };
                    
                    case CLEAR_ERRORS:
                    return{
                        ...state,
                        error: null,          
                    };
            
                default:
                    return state;
            }
            
            };
            