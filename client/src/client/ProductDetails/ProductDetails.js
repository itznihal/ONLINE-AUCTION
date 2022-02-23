import React, { useState } from 'react';
import Img from "../images/values-1.png";
import Img2 from "../images/values-3.png";
import { Swiper , SwiperSlide} from "swiper/react";
import SwiperCore , {Navigation, Pagination, Scrollbar, A11y , Autoplay , Thumbs} from "swiper";
import "./productdetails.scss";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import 'swiper/css/thumbs';
import 'swiper/css/a11y';
import 'font-awesome/css/font-awesome.min.css';





// Swiper Tesing
SwiperCore.use([Navigation , Pagination , Thumbs , Autoplay]);



const ProductDetails = () => {

    const [thumbsSwiper , setThumbsSwiper] = useState(null);

    const slides = []

    for( let i = 0 ; i< 5 ; i+=1){
         slides.push(
             <SwiperSlide key = {`slide-${i}`} tag="li">
                <div className="single-prd-item">
                                <img className="img-fluid" src={Img} alt="Product Image"/>
                            </div>
             </SwiperSlide>
         ); 
    
    }

    const thumbs = []

    for( let i = 0 ; i< 5 ; i+=1){
         thumbs.push(
             <SwiperSlide key = {`thumb-${i}`} tag="li" style={{listStyle: 'none'}}>
                    <div className='multiproduct-itm'>
                                <img  className='coursel-img2' src={Img2} alt="Product2 Image"/>
                                </div>
             </SwiperSlide>
         ); 
    
    }

    



  return (
    <>
    
    <div className='product_d'>
        <div className="product_image_area">
		<div className="container">
			<div className="row s_product_inner">
				<div className="col-lg-6">



					<div className="s_Product_carousel">
						{/* <div className="single-prd-item">
							<img className="img-fluid" src={Img} alt="Product Image"/>
						</div>
						<div className="single-prd-item">
							<img className="img-fluid" src={Img} alt="Product Image"/>
						</div>
						<div className="single-prd-item">
							<img className="img-fluid" src={Img} alt="Product Image"/>
						</div> */}
<div className='coursel-manage'>
                        <Swiper tag="section" wrapperTag="ul" 
                        modules={[Navigation, Pagination , A11y , Autoplay]}
                       id="main"
                       thumbs={{swiper : thumbsSwiper}}
                       slidesPerView={1}
                       navigation
                       pagination={{ clickable: true }}
                       autoplay
                       spaceBetween = {0}
                        onInit = {(swiper) => console.log(`Swiper Initiliazed` , swiper)}
                       onSlideChange={(swiper) => console.log('slide change' , swiper.activeIndex)}
                        onReachEnd = {console.log(`Swiper Reach End`)}
                       >{slides}</Swiper>

</div>

                       <Swiper id="thumbs"
                       spaceBetween={0}
                       slidesPerView={3}
                       onSwiper={setThumbsSwiper} 
                       >
                        {thumbs}
                       </Swiper> 
                       
					</div>


				</div>
				<div className="col-lg-5 offset-lg-1">
					<div className="s_product_text">
						<h3>Faded SkyBlu Denim Jeans</h3>
						<h2>$149.99</h2>
						<ul className="list">
							<li><a className="active" href="#"><span>Category</span> : Household</a></li>
							<li><a href="#"><span>Ends In</span> {`: Timing`}</a></li>
						</ul>
						<p>Mill Oil is an innovative oil filled radiator with the most modern technology. If you are looking for
							something that can make your interior look awesome, and at the same time give you the pleasant warm feeling
							during the winter.</p>
						<div className="product_count">
							<label for="qty">Bid Ammount:</label>
							<input type="text" name="qty" id="sst" maxlength="12" value="1" title="Quantity:" className="input-text qty"/>
							{/* <button 
							 className="increase items-count" type="button"><i class="fa-solid fa-angle-up"></i></button>
							<button 
							 className="reduced items-count" type="button"> <i class="fa-solid fa-chevron-down"></i></button> */}
						</div>
						<div className="card_area d-flex">
							<a className="primary-btn" href="#">Place Bid</a>
                            <div className='pd-social-links'>
							<a className="icon_btn" href="#"><i className="fab fa-facebook-f"></i></a>
							<a className="icon_btn" href="#"><i className="fab fa-instagram"></i></a>
                            <a className="icon_btn" href="#"><i className="fab fa-whatsapp"></i></a>
                            <a className="icon_btn" href="#"><i className="fab fa-linkedin-in"></i></a>

                            </div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>

{/* PRODUCT ADDITIONAL INFORMATION */}

<div className='product_info'>
<div className='row'>
          <div className='col-10 mx-auto'>



          <div className="section-title" data-aos="fade-up">
          <h2>Additional Information</h2>
          <p>Product Seller and other Additional Information</p>
        </div>

{/* Section Starts */}

        <section id="features" className="features">
      <div className="container" data-aos="fade-up">

        <ul className="nav nav-tabs row gy-4 d-flex justify-content-center">

          <li className="nav-item col-6 col-md-4 col-lg-2">
            <a className="nav-link active show" data-bs-toggle="tab" data-bs-target="#tab-1">
              <i className="bi bi-binoculars color-cyan"></i>
              <h4>Seller</h4>
            </a>
          </li>

          <li className="nav-item col-6 col-md-4 col-lg-2">
            <a className="nav-link" data-bs-toggle="tab" data-bs-target="#tab-2">
              <i className="bi bi-box-seam color-indigo"></i>
              <h4>Product</h4>
            </a>
          </li>

          
        </ul>

        <div className="tab-content">


{/* Card CSS */}



          <div className="tab-pane active show card" id="tab-1">


            <div className="row gy-4">
              <div className="col-lg-8 order-2 order-lg-1" data-aos="fade-up" data-aos-delay="100">
              <div className="tab-pane fade show active profile-overview" id="profile-overview">
                 

                 <h5 className="card-title">Profile Details</h5>

                 <div className="row">
                   <div className="col-lg-3 col-md-4 label ">Full Name</div>
                   <div className="col-lg-9 col-md-8">SELLER NAME </div>
                 </div>

                 <div className="row">
                   <div className="col-lg-3 col-md-4 label">Job</div>
                   <div className="col-lg-9 col-md-8">User</div>
                 </div>

               


                 <div className="row">
                   <div className="col-lg-3 col-md-4 label">Phone</div>
                   <div className="col-lg-9 col-md-8">5151151511</div>
                 </div>

                 <div className="row">
                   <div className="col-lg-3 col-md-4 label">Email</div>
                   <div className="col-lg-9 col-md-8">SELLER@gmail.com</div>
                 </div>

               </div>
              </div>
              <div className="col-lg-4 order-1 order-lg-2 text-center" data-aos="fade-up" data-aos-delay="200">
                <img src={Img} alt="" className="img-fluid"/>
              </div>
            </div>
          </div>

          <div className="tab-pane card" id="tab-2">
            <div className="row gy-4">
              
                
            <div className="tab-pane fade show active profile-overview" id="profile-overview">
                 

                 <h5 className="card-title">Product Details</h5>

                 <div className="row">
                   <div className="col-lg-3 col-md-4 label ">Product Name</div>
                   <div className="col-lg-9 col-md-8">PRODUCT NAME </div>
                 </div>

                 <div className="row">
                   <div className="col-lg-3 col-md-4 label">Description</div>
                   <div className="col-lg-9 col-md-8">DESCRIPTION</div>
                 </div>

                 <div className="row">
                   <div className="col-lg-3 col-md-4 label">Start Date</div>
                   <div className="col-lg-9 col-md-8">START DATE</div>
                 </div>

               



                 <div className="row">
                   <div className="col-lg-3 col-md-4 label">Initial Price</div>
                   <div className="col-lg-9 col-md-8">Initial Price</div>
                 </div>


                 <div className="row">
                   <div className="col-lg-3 col-md-4 label">End Time</div>
                   <div className="col-lg-9 col-md-8">End Time</div>
                 </div>

               </div>
              
            </div>
          </div>

         

          

         

          

        </div>

      </div>
    </section>






          </div></div>





</div>






    </div></>
  );
}

export default ProductDetails;