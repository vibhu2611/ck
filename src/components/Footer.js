import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const Footer = () => {

const [status,setStatus] = useState ('');

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_yhjxezi",
        "template_tgtvvbx",
        e.target,
        "_8BySXajTxA8wOPsqY"
      )
     
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          alert(error.abc);
        }
      );
    e.target.reset();
    setStatus('Sucess')
  }

  return (
    <>
      <footer className="text-center mb-5" id="contact-us">
        <div className="heading py-3 py-md-5">
          <div className="h4 fw-bold font-family-akira">CONTACT US</div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="h5 text-center text-md-start text-white my-5 font-family-Helvetica">
                Quick Links
              </div>
              <div className="quick-links d-flex justify-content-center justify-content-md-around font-family-Helvetica">
                <ul>
                  <li>
                    <a href="#">HOME</a>
                  </li>
                  <li>
                    <a href="#ecosystem">ECO SYSTEM</a>
                  </li>
                  <li>
                    <a href="#roadmap">ROADMAP</a>
                  </li>
                  <li>
                  <a href="/privacy-policy">PRIVACY POLICY</a>
                  </li>
                </ul>
                <ul>
                  <li>
                    <a href="#team">TEAM</a>
                  </li>
                  <li>
                    <a href="#faq">FAQ</a>
                  </li>
                  <li>
                    <a href="#contact-us">CONTACT US</a>
                  </li>
                 
                </ul>
              </div>
            </div>
            <div className="col-md-5">
              <div className="h5 text-center text-white my-5 font-family-Helvetica">
                Get in touch with us
              </div>
              <div className="col-md-12 vali">
              {status && renderAlert ()}
              </div>
              <form onSubmit={sendEmail}>
                <div className="row">
                  <div className="col-sm-6">
                    <input
                      type="text"
                      id="name"
                      name="from_name"
                      placeholder="Your Name"
                      className="inptFld"
                      required
                    />
                  </div>

                  <div className="col-sm-6">
                    <input
                      type="email"
                      id="email"
                      name="from_email"
                      placeholder="Email Address"
                      className="inptFld"
                      required
                    />
                  </div>

                  <div className="col-sm-6">
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      placeholder="Phone Number"
                      className="inptFld"
                      required
                    />
                  </div>

                  <div className="col-sm-6">
                    <input
                      type="text"
                      id="sub"
                      name="subject"
                      placeholder="Subject"
                      className="inptFld"
                      required
                    />
                  </div>

                  <div className="col-12">
                    <textarea
                      className="inptFld"
                      id="mesg"
                      name="message"
                      rows=""
                      cols=""
                      placeholder="Your Message..."
                      required
                    ></textarea>
                  </div>

                  <div className="col-12">
                    <div className=" d-flex justify-content-center">
                      <input
                        type="submit"
                        id="subform"
                        name="submit"
                        value="Submit"
                        className="inptBtn reverse-btn"
                      />
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <div className="col-md-4">
              <div className="h5 text-center text-white my-5 font-family-Helvetica">
                Project Built on Top Blockchain
              </div>
              <div className="bunch-ffoter font-family-Helvetica">
                <div className="d-flex align-items-center mb-4">
                  <img
                    src="assest\images\Binance-1.png"
                    alt="Binance-1"
                    className="footer-img"
                  />
                  <a href="#" className="text-decoration-none text-white ps-3">
                    BNB Smart Chain
                  </a>
                </div>
                <div className="d-flex align-items-center my-5">
                  <img
                    src="assest\images\mail-icon.png"
                    alt="mail-icon.png"
                    className="footer-img"
                  />
                  <a
                    href="mailto:info@cinemakoin.io"
                    className="text-decoration-none text-white ps-3 text-start"
                  >
                    Email<div className="fs-12">info@cinemakoin.io</div>
                  </a>
                </div>
                <ul className="social-list m-0 p-0 text-start">
                  <li>
                    <a href="https://instagram.com/cinemakoin">
                      <img
                        src="assest\images\insta.png"
                        alt="instagram"
                        className="footer-img"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="https://medium.com/@cinema_koin">
                      <img
                        src="assest\images\mediumlogo.png"
                        alt="instagram"
                        className="footer-img"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="https://twitter.com/cinema_koin">
                      <img
                        src="assest\images\twitter.png"
                        alt="instagram"
                        className="footer-img"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="https://t.me/cinemakoinofficial">
                      <img
                        src="assest\images\massanger.png"
                        alt="instagram"
                        className="footer-img"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="https://youtu.be/xlafHJ_2PZo">
                      <img
                        src="assest\images\youtubelogo.png"
                        alt="instagram"
                        className="footer-img"
                      />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
const renderAlert = () =>(
<div className="text-info h6 pb-3">
Your message has been sent. Thank you.
</div>
)
export default Footer;
