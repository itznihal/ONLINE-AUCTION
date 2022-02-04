import React from 'react';
import CheckBox from "../Inputs/CheckBox";
import RadioButton from "../Inputs/RadioButton";
import "./lotstyle.scss";

const Lot = () => {
  return (
  <>
      {/* <h1> Lot Page</h1> */}


      <div className=" lotcls" data-aos="fade-up" data-aos-delay="400">
        <div className='row'>
          <div className='col-10 mx-auto'>
          
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
                    <RadioButton value=""  name="search-among" label="All lots" />
                  </div>
                  <div>
                    <RadioButton value="active"  name="search-among" label="Active lots" />
                  </div>
                  <div>
                    <RadioButton value="sold"  name="search-among" label="Sold lots"/>
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
          <section className="lots filters-container">
            <div className="lots-grid">
              
            </div>
           

          </section>
        </div>
      </section>




</div>
          </div>
          </div>


  </>);
};

export default Lot;
