import React, { useEffect, useRef, useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';

import { Link } from 'react-router-dom';
import { MdModeEdit } from 'react-icons/md';
import {AiFillDelete} from 'react-icons/ai';
import { clearErrors, deleteProduct } from '../../actions/productAction';
import {useSelector , useDispatch} from "react-redux";
import Loader from '../Loader/Loader';
import { useAlert } from 'react-alert';
import MetaData from '../MetaData/MetaData';
import { DELETE_PRODUCT_RESET } from '../../constants/productConstants';



const SellerProduct = ({product}) => {

  const alert = useAlert();
  const dispatch = useDispatch();

  const history = useHistory();

  
  const {loading , error , isDeleted} = useSelector(
    (state) => state.deleteProduct
    );
    
    const deleteProductHandler = (id) => {
    dispatch(deleteProduct(id));
    };

  useEffect(() => {
    
  
    if(error){
       alert.error(error);
       dispatch(clearErrors());
    }

    if(isDeleted){
      history.push('/lot');
      // alert.success("Product Deleted Successfully");
      dispatch({type: DELETE_PRODUCT_RESET});
    }
    
  }, [dispatch , error , alert ,isDeleted ]);



    const [timerDays , setTimerDays] = useState('00');
    const [timerHours , setTimerHours] = useState('00');
    const [timerMinutes , setTimerMinutes] = useState('00');
    const [timerSeconds , setTimerSeconds] = useState('00');
    
    let interval = useRef();
    
    const startTimer = () => {
    const countdownDate = new Date(product.bidEnd).getTime();
     
    interval = setInterval (() => {
    // GET A NEW CURRENT DATE AT EVERY SECOND
    const now = new Date().getTime();
    const distance = countdownDate - now;
    
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)));
    const minutes = Math.floor((distance % (1000 * 60 * 60 )) / (1000 * 60)) ;
    const seconds = Math.floor((distance % (1000 * 60 ))/1000);
    
    if(distance<0){
      // STOP TIMER
    clearInterval(interval.current);
    }
    else{
      setTimerDays(days);
      setTimerHours(hours);
    setTimerMinutes(minutes);
    setTimerSeconds(seconds);
    
    }
    
    },1000);
    };
    
    // COMPONENT DID MOUNT LIFECYCLE
    
    useEffect(() => {
      startTimer();
      return() => {
        clearInterval(interval.current);
      };
    
      
    });
    
    
    var countdownDate = new Date(product.bidEnd).getTime();
    var now = new Date().getTime();
    var dateEnd = new Date(product.bidEnd);
    


  return (
  


<>
<div className="col-sm-6 col-lg-4 product-mediaquery">
          <div className="box">
            <div className="img-box">
              <img src={product.images[0].url} alt={product.itemName}/>
              <Link to={`/product/${product._id}`} className="add_cart_btn">
                <span>
                  Show Auction
                </span>
              </Link>
            </div>
            <div className="detail-box">
              <h5>
              {product.itemName}
              </h5>
              <div className="product_info">
                <h5>
                  <span>{`₹${product.startingBid}`}</span> 
                </h5>
                <div className="star_container">
                <h5>


{(countdownDate > now) ? (

              <span>{`Ends In:${timerDays}:${timerHours}:${timerMinutes}:${timerSeconds} `}</span>

              ) : (
                <span>{ `Ended : ${dateEnd.getDate()}-${dateEnd.getMonth()}-${dateEnd.getFullYear()}  `}</span>
              )}
              </h5>
                </div>
              </div>
              <div className='dltupdbtn'>



              <button type="button" className="btn btn-light" 
                    disabled = {!(countdownDate > now) ? true : false}
                    onClick={() => {
      window.open(`/updateauction/${product._id}`, "_blank");
    }}
                     > <MdModeEdit/> </button>
                    
              <button type="button" className="btn btn-light" 
                    disabled = {!(countdownDate > now) ? true : false} 
                    onClick = { () => deleteProductHandler(product._id)}
                    > <AiFillDelete/> </button>
              </div>
            </div>
          </div>
        </div>
</>

  );
};

export default SellerProduct