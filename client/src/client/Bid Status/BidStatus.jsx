import React, { useEffect } from 'react';
import "./bidstatus.scss";
import { NavLink } from 'react-router-dom';
import MetaData from '../MetaData/MetaData';
import Product from "../HomePage/Product";
import { getBiddedProducts } from '../../actions/productAction';
import {useSelector , useDispatch} from "react-redux";
import Loader from '../Loader/Loader';
import { useAlert } from 'react-alert';


const BidStatus = () => {

    const alert = useAlert();
    const dispatch = useDispatch();
    const {myproducts , loading , error } = useSelector(
  (state) => state.myproducts
    );


    useEffect(() => {
  

        if(error){
          return alert.error(error);
        }
      dispatch(getBiddedProducts());
        
      }, [dispatch , error , alert]);


  return (
<>{loading ? (<Loader/>) :( 
<>
<MetaData title="BID STATUS"></MetaData>

<div className="container-fluid  bidstatuscls">
        <div className='row'>
          <div className='col-10 mx-auto'>

{/* <h1>Hello World</h1> */}

<section className="product_section layout_padding">
    <div className="container">
      <div className="heading_container heading_center">
      <div className="section-title" data-aos="fade-up">
          <h2>Bid Status</h2>
          <p>Auctions you bidded</p>
        </div>

      </div>
      <div className="row">

{myproducts && myproducts.map(product => (
  <Product product = {product} />
))}





        
        
      </div>
      
    </div>
  </section>



          </div>
          </div>
          </div>
    </>
    ) }</>
  );
};

export default BidStatus;