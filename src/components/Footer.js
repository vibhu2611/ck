import React from "react";
import {useFormik } from "formik";
export default function Footer() {
    const initialValues = {
        name: "",
        email: "",
        password: "",
        phone: "",
        mesg: "",
        sub: "",
        confirm_password: "",
      };
      
        const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
          useFormik({
            initialValues,
            validationSchema: '',
            onSubmit: (values, action) => {
              console.log(
                " ~ ~ erros",
                errors
              );
              action.resetForm();
            },
          });
          console.log(
            " ~ ~ values",
            values
          );
  return (
    <>
      <footer className="text-center pb-5 bg-black" id="contact-us">
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
                <p className="text-danger text-start">
                  All fileds are required. Please fill all information.
                </p>
              </div>
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-sm-6">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Your Name"
                      className="inptFld"
                      value={values.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      required
                    />
                  </div>

                  <div className="col-sm-6">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Email Address"
                      className="inptFld"
                      vvalue={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
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
                      value={values.phone}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      required
                    />
                  </div>

                  <div className="col-sm-6">
                    <input
                      type="text"
                      id="sub"
                      name="sub"
                      placeholder="Subject"
                      className="inptFld"
                      required
                      value={values.sub}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </div>

                  <div className="col-12">
                    <textarea
                      className="inptFld"
                      id="mesg"
                      name="mesg"
                      rows=""
                      cols=""
                      placeholder="Your Message..."
                      value={values.mesg}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      required
                    ></textarea>
                  </div>

                  <div className="col-12">
                    <div className=" d-flex justify-content-center">
                      <input
                        type="button"
                        id="subform"
                        name="submit"
                         value="SUBMIT"
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
}