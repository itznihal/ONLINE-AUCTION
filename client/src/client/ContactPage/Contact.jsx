import React from 'react';
import "./contactstyle.scss";

const Contact = () => {
  return (
  <>
      {/* <h1 id='contchead'> Contact Page</h1> */}

      <div className="container-fluid nav_bg contactpge">
  <div className='row'>
    <div className='col-10 mx-auto'>

    <section className="contact contacttextt">
        <div className="content" data-aos="flip-left" data-aos-delay="100">
           


            <div className="section-title">
            <h2 font-color="#00bcd4" data-aos="fade-up" data-aos-delay="300">Contact Us</h2>
            <p data-aos="fade-up" data-aos-delay="400"> Feel free to contact with estbid. If tou have any query then please submit your quetions with your details. Keep bidding!!!</p>
                </div>
        </div>
        {/* <div className='formcards'> */}
        <div className="container ">
        {/* <h1>Hello World</h1> */}
             <div className="contactInfo col-xl-6">
             
                <div className="box" data-aos="fade-up-right" data-aos-delay="400">
                <div className="step">
                    <div className="icon"><i className="fa fa-map-marker" aria-hidden="true"></i>
                    </div>
                    <div className="text">
                        <h3>Address</h3>
                        <p>9999 DDU,  College Road, Nadiad, Gujarat 387002
                        </p>
                    </div>
                    </div>
                    {/* <h1>xwxw</h1> */}
                </div>
                
                
                 <div className="box" data-aos="fade-up-left" data-aos-delay="500">
                 <div className="step">
                    <div className="icon"><i className="fa fa-phone" aria-hidden="true"></i></div>
                    <div className="text">
                        <h3>Phone</h3>
                        <p>1234567890</p>
                    </div>
                    </div>
                </div>
                <div className="box" data-aos="zoom-in-left" data-aos-delay="600">
                <div className="step">
                    <div className="icon"><i className="fa fa-envelope-o" aria-hidden="true"></i></div>
                    <div className="text">
                        <h3>Email</h3>
                        <p>bestbid@gmial.com</p>
                    </div>
                    </div>
                </div> 
            </div> 


 <div className="contactForm col-xl-6" >
                
                {/* Contact Form Here */}



                
          <div className="card p-4">
            <form action="forms/contacttextt.php" method="post" className="react-email-form">
              <div className="row gy-4">

                <div className="col-md-6">
                  <input type="text" name="name" className="form-control" placeholder="Your Name" required/>
                </div>

                <div className="col-md-6 ">
                  <input type="email" className="form-control" name="email" placeholder="Your Email" required/>
                </div>

                <div className="col-md-12">
                  <input type="text" className="form-control" name="subject" placeholder="Subject" required/>
                </div>

                <div className="col-md-12">
                  <textarea className="form-control" name="message" rows="6" placeholder="Message" required></textarea>
                </div>

                <div className="col-md-12 text-center">
                  <div className="loading">Loading</div>
                  <div className="error-message"></div>
                  <div className="sent-message">Your message has been sent. Thank you!</div>

                  <button type="submit">SUBMIT</button>
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




  </>);
};

export default Contact;
