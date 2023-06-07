// import React from "react";
import { contactUsSchema } from "../schemas";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useFormik } from "formik";

const Footer = () => {
  let initialValues = {
    name: "",
    email: "",
    phone: "",
    sub: "",
    mesg: "",
  };
  const { values, errors, touched, handleBlur, handleChange } =
    useFormik({
      initialValues,
      validationSchema: contactUsSchema,
      onSubmit: (values, action) => {
        action.resetForm();
      },
    });
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_rsuxm6s",
        "template_vxfpvgn",
        form.current,
        "CKUa0gU9DHsu1jh_i"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

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
                {/* <p className="text-danger text-start">
                  All fileds are required. Please fill all information.
                </p> */}
              </div>
              <form ref={form} onSubmit={sendEmail}>
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
                    {errors.name && touched.name ? (
                      <p className="form-error text-warning">{errors.name}</p>
                    ) : null}
                  </div>

                  <div className="col-sm-6">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Email Address"
                      className="inptFld"
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      required
                    />
                    {errors.email && touched.email ? (
                      <p className="form-error text-warning">{errors.email}</p>
                    ) : null}
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
                    {errors.phone && touched.phone ? (
                      <p className="form-error text-warning">{errors.phone}</p>
                    ) : null}
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
                    {errors.sub && touched.sub ? (
                      <p className="form-error text-warning">{errors.sub}</p>
                    ) : null}
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
                    {errors.mesg && touched.mesg ? (
                      <p className="form-error text-warning">{errors.mesg}</p>
                    ) : null}
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
export default Footer;
