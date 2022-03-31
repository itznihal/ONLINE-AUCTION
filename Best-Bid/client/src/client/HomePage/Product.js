import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom';

const Product = ({product}) => {


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
          <div className="box" data-aos="fade-up" data-aos-delay="200" >
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
            </div>
          </div>
        </div>
    </>
  );
};

export default Product;