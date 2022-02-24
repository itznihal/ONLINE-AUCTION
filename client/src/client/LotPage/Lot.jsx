import React, { useEffect } from 'react';
import CheckBox from "../Inputs/CheckBox";
import RadioButton from "../Inputs/RadioButton";
import "./lotstyle.scss";
import {useSelector , useDispatch} from "react-redux";
import {clearErrors , getProduct} from "../../actions/productAction";
import Loader from '../Loader/Loader';
import Product from "../HomePage/Product";




const Lot = () => {

const dispatch = useDispatch();
  
const {loading , error , products , productCount} = useSelector(
  (state) => state.products
    );
  
useEffect(() => {
  

 
dispatch(getProduct());
  
}, [dispatch ]);

  return (
     <>{loading ? (<Loader/>) :(
  <>
      {/* <h1> Lot Page</h1> */}


      <div className=" lotcls" data-aos="fade-up" data-aos-delay="400">
        <div className='row'>
          <div className='col-10 mx-auto'>
          
{/* Heading Section */}

<div className="section-title" data-aos="fade-up">
          <h2>Auctions</h2>
          <p>Start Bidding Now!</p>
        </div>



      <section className="lots-section">
        <div className="lots-list-content lots-container">
          <section className="filters">
            <div className="filters-container displayFilters">
              <h2>
                Filters
              </h2>

              <div className="filter-container">
                <div className="filter-title">Search among</div>
                <div className="filter-list">
                  <div>
                    <RadioButton value=""  name="search-among" label="All Auctions" />
                  </div>
                  <div>
                    <RadioButton value="active"  name="search-among" label="Active Auctions" />
                  </div>
                  <div>
                    <RadioButton value="sold"  name="search-among" label="Featured Auctions"/>
                  </div>
                  
                </div>
              </div>



              <div className="filter-container">
                <div className="filter-title">Category</div>
                <div className="filter-list">
                  <select name="category" id="category" >
                    <option value="">All</option>
                    
                    <option>Cloth</option>
                    <option>Electronics</option>
                    <option>Property</option>
                    <option>Household</option>
                    <option>Others</option>
                    
                  </select>
                </div>
              </div>


              <div className="filter-container">
                <div className="filter-title">Price</div>
                <div className="filter-list">
                  <div>
                    <RadioButton id="priceAZ" name="sort" value="priceAZ" label="From lower to higher" />
                  </div>
                  <div>
                    <RadioButton id="priceZA" name="sort" value="priceZA" label="From higher to lower" />
                  </div>
                  <div className="price-range">
                    <div>
                      <input type="text" placeholder="From" id="price-from" name="priceFrom" />-
                      <input type="text" placeholder="To" id="price-to" name="priceTo" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="filter-container">
                <div className="filter-title">Name</div>
                <div className="filter-list">
                  <div>
                    <RadioButton id="nameAZ" value="nameAZ" name="sort" label="From A to Z" />
                  </div>
                  <div>
                    <RadioButton id="nameZA" value="nameZA" name="sort" label="From Z to A" />
                  </div>
                </div>
                <div className="price-range name-contains">
                  <div>
                    <input type="text" placeholder="Match" id="name-contains" name="name-contains" />
                  </div>
                </div>
              </div>

              <div className="filter-container">
                <div className="filter-title">Date</div>
                <div className="filter-list">
                  <div>
                    <RadioButton id="dateAZ" value="dateAZ" name="sort" label="From Oldest to Newest" />
                  </div>
                  <div>
                    <RadioButton id="dateZA" value="dateZA" name="sort" label="From Newest to Oldest" />
                  </div>
                </div>
              </div>


              <div className="filter-container">
                <div className="filter-title">Payment type</div>
                <div className="filter-list">
                  
                    <div key="payment">
                      <CheckBox
                        id="payment1"
                        name="payment"
                        value="Cash"
                        label="Cash"
                       
                      />

                       <CheckBox
                        id="payment1"
                        name="payment"
                        value="Cash"
                        label="Debit Card"
                       
                      />

                       <CheckBox
                        id="payment1"
                        name="payment"
                        value="Cash"
                        label="Other"
                       
                      />

                       
                    </div>
                 
                </div>
              </div>


              <div className="filter-container">
                <div className="filter-title">Delivery type</div>
                <div className="filter-list">
                
                    <div key="delivery">
                      <CheckBox
                        type="checkbox"
                        id="delivery1"
                        name="Courior"
                        value="Courior"
                        label="Courior"
                      
                      />
                    </div>
                 
                </div>
              </div>

            </div>
          </section>
          <section className="product-lots">

          <div className="row">
                        <div className="col-12">
                            <div className="product-topbar d-flex align-items-center justify-content-between">
                                {/* <!-- Total Products --> */}
                                <div className="total-products">
                                    <p><span>{productCount}</span> products found</p>
                                </div>
                                {/* <!-- Sorting --> */}
                                {/* <div className="product-sorting d-flex">
                                    <p>Sort by:</p>
                                    <form action="#" method="get">
                                        <select name="select" id="sortByselect">
                                            <option value="value">Highest Rated</option>
                                            <option value="value">Newest</option>
                                            <option value="value">Price: $$ - $</option>
                                            <option value="value">Price: $ - $$</option>
                                        </select>
                                        <input type="submit" className="d-none" value=""/>
                                    </form>
                                </div> */}
                            </div>
                        </div>
                    </div>            
                    <div className="lots-grid">
              

            {products && products.map(product => (
  <Product product = {product} />
))}

              
            </div>
           

          </section>
        </div>
      </section>




</div>
          </div>
          </div>


  </>
  ) }</>
  
  );
};

export default Lot;
