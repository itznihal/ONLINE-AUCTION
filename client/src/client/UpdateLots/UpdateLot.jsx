import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import MetaData from '../MetaData/MetaData';
import Product from "../HomePage/Product";
import { getSellerProducts } from '../../actions/productAction';
import {useSelector , useDispatch} from "react-redux";
import Loader from '../Loader/Loader';
import { useAlert } from 'react-alert';
import "./updateLotstyle.scss";

const UpdateLot = () => {


  const alert = useAlert();
  const dispatch = useDispatch();
  const {sellerproducts , loading , error } = useSelector(
(state) => state.sellerproducts
  );


  
  useEffect(() => {
  

    if(error){
      return alert.error(error);
    }
  dispatch(getSellerProducts());
    
  }, [dispatch , error , alert]);


  return (
    <>{loading ? (<Loader/>) :( 

  
  <>

<div className=" updatelotcls" data-aos="fade-up" data-aos-delay="400">
        <div className='row'>
          <div className='col-10 mx-auto'>

          


          <section className="product_section layout_padding">
    <div className="container">
      <div className="heading_container heading_center">
      <div className="section-title" data-aos="fade-up">
          <h2>My Auctions</h2>
          <p>Auctions Created By you</p>
        </div>

      </div>
      <div className="row">

{sellerproducts && sellerproducts.map(product => (
  <Product product = {product} />
))}





        
        
      </div>
      
    </div>
  </section>

          </div>
          </div>
          </div>
  </>
  
  )}</>
  );

};

export default UpdateLot;
