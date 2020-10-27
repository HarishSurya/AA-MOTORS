import React from 'react';
import '../../App.css';

import HeroSection from '../HeroSection';
import Footer from '../Footer';


export default function SignUp() {
  return (
    <>
     <HeroSection />
   <section class="contact" id="contact">
                <div class="contactus">
                    <div class="row">
                        <div class="col-md center-xs">
                            <h2 class="section-title">Contact Us</h2>
                        </div>
                    </div>
                    <div class="row margin-bottom-small center-xs">
                        <div class="col-md">Call Us At<br/>+91 9845678912</div><br/>
                        <div class="col-md">Address<br/>No. 778, 8th Cross Rd, Gokula 1st Stage, <br></br>
                                                         Triveni Road, Yeswanthpur, Bengaluru, <br></br>
                                                          Karnataka 560054</div><br/>
                        <div class="col-md">Email<br/>aamotors8@gmail.com</div><br/>
                    </div>
                    <form action="">
                        <div class="row margin-bottom-small center-xs">

                            <div class="contactname">
                                <div class="row">
                                    <div class="col-md">
                                        <h3>Get in Touch</h3><br/>
                                        <h4>Please fill out this form and we will get in touch with you</h4><br/>
                                        <input placeholder="Enter Your Name" type="text" name="" value="" className="contactplace"></input><br/>
                                        <input placeholder="Enter Your Email" type="email" name=""  value="" className="contactemail></input><br/>
                                          </div>
                                       </div>
                                    </div>
                                  
                            <div className="cres">
                                <textarea placeholder="Your Message" name="" rows="8" className="contactmessage"></textarea><br/>
                                <input type="submit" value="Submit"></input><br/>
    
                            </div>
                        </div>
                    </form>
                </div>
            </section>
      <Footer />
    
    </>
    );
}



