import React from 'react';

import "./addlotstyles.scss";


const Addlot = () => {
  return (
  <>

<div className=" signupcls" data-aos="fade-up" data-aos-delay="400">
        <div className='row'>
          <div className='col-10 mx-auto'>
    

       <section className="section form-elements">
      <div className="row">
        

          <div className="card">
            <div className="card-body">
              <h5 className="card-title">ADD LOT</h5>

              
              <form className='formbd'>

              {/* LOT NAME */}
                <div className="row mb-3 rowset">
                  <label for="inputText" className="col-sm-2 col-form-label">LOT NAME</label>
                  <div className="col-sm-10">
                    <input type="text" className="form-control"/>
                  </div>
                </div>
              
                
{/* LOT DESCRIPTION */}

                <div className="row mb-3 rowset">
                  <label for="inputPassword" className="col-sm-2 col-form-label">LOT DESCRIPTION</label>
                  <div className="col-sm-10">
                    <textarea className="form-control" style={{height: "100px"}}></textarea>
                  </div>
                </div>


{/* CATEGORY */}
                <div className="row mb-3 rowset">
                  <label className="col-sm-2 col-form-label">CATEGORY</label>
                  <div className="col-sm-10">
                    <select className="form-select" aria-label="Default select example">
                      <option selected>Choose Category</option>
                      <option value="1">Clothes</option>
                      <option value="2">Electronics</option>
                      <option value="3">Properties</option>
                      <option value="3">Clothing</option>
                      <option value="3">HouseHold</option>


                    </select>
                  </div>
                </div>


{/* LOT START PRICE */}

                <div className="row mb-3 rowset">
                  <label for="inputNumber" className="col-sm-2 col-form-label">LOT START PRICE</label>
                  <div className="col-sm-10">
                    <input type="number" className="form-control"/>
                  </div>
                </div>


                {/* END DATE */}
                <div className="row mb-3 rowset">
                  <label for="inputDate" className="col-sm-2 col-form-label">END DATE</label>
                  <div className="col-sm-10">
                    <input type="date" className="form-control"/>
                  </div>
                </div>



{/* END TIME */}

                <div className="row mb-3 rowset">
                  <label for="inputTime" className="col-sm-2 col-form-label">END TIME</label>
                  <div className="col-sm-10">
                    <input type="time" className="form-control"/>
                  </div>
                </div>

{/* LOT IMAGES */}

                <div className="row mb-3 rowset">
                  <label for="inputNumber" className="col-sm-2 col-form-label">LOT IMAGES</label>
                  <div className="col-sm-10">
                    <input className="form-control" type="file" id="formFile"/>
                  </div>
                </div>
 
                {/* PAYMENT METHOD */}
                <div className="row mb-3 rowset">
                  <legend className="col-form-label col-sm-2 pt-0">PAYMENT METHODS</legend>
                  <div className="col-sm-10">

                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" id="gridCheck1"/>
                      <label className="form-check-label" for="gridCheck1">
                        CASH
                      </label>
                    </div>

                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" id="gridCheck2" />
                      <label className="form-check-label" for="gridCheck2">
                        OTHER
                      </label>
                    </div>

                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" id="gridCheck2" />
                      <label className="form-check-label" for="gridCheck2">
                        DEBIT CARD
                      </label>
                    </div>

                    

                  </div>
                </div>


{/* DELIVERY METHODS */}

<div className="row mb-3 rowset">
                  <legend className="col-form-label col-sm-2 pt-0">PAYMENT METHODS</legend>
                  <div className="col-sm-10">

                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" id="gridCheck1"/>
                      <label className="form-check-label" for="gridCheck1">
                        POST OFFICE
                      </label>
                    </div>

                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" id="gridCheck2" />
                      <label className="form-check-label" for="gridCheck2">
                        PERSONAL MEETING
                      </label>
                    </div>

                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" id="gridCheck2" />
                      <label className="form-check-label" for="gridCheck2">
                        COURIOUR
                      </label>
                    </div>

                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" id="gridCheck2" />
                      <label className="form-check-label" for="gridCheck2">
                        OTHER
                      </label>
                    </div>

                    

                  </div>
                </div>




            

                <div className="row mb-3 rowset">
                  <label className="col-sm-2 col-form-label">Submit Button</label>
                  <div className="col-sm-10">
                    <button type="submit" className="btn btn-primary">Submit Form</button>
                  </div>
                </div>

              </form>
              
            </div>
          </div>

       
        
        </div>
          </section>







       </div>
       </div>
       </div>

     



  </>
  
  );
};

export default Addlot;
