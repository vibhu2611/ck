import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

export default function Header() {
    
  return (
    <>
          <header className="font-family-akira">
            <nav className="navbar navbar-expand-lg zind navbar-light px-3">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#"><img src="assest/images/ck-logo.png" alt="ck-logo" /></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-between" id="navbarSupportedContent">
                      <ul className="navbar-nav  mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active fw-bold" href="/">HOME</a>
                            </li>
                            <li className="nav-item">
                            
                                <a className="nav-link fw-bold px-3" href="#ecosystem">ECO-SYSTEM</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link fw-bold px-3" href="#roadmap">ROADMAP</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link fw-bold px-3" href="#team">TEAM</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link fw-bold px-3" href="#faq">FAQ</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link fw-bold px-3" href="#contact-us">CONTACT US</a>
                            </li>
                        </ul>
                      
                        <form className="d-grid flex-wrap flex-md-nowrap d-md-flex justify-content-center pb-4 pb-lg-0">
                            <a className="btn  fw-bold mb-2 mb-md-0 ms-xl-3 ms-lg-2"
                                href="https://cinemakoin.io/cinemakoin-litepaper.pdf"
                                download="cinemakoin-litepaper.pdf">
                                <span>LITEPAPER</span>
                            </a>
                            <a className="btn fw-bold mb-2 mb-md-0 ms-xl-3 ms-lg-2" href="https://typebot.io/ck-lead">
                                <span>JOIN WAITLIST</span>
                            </a>
                            <a className="btn fw-bold mb-2 mb-md-0 ms-xl-3 ms-lg-2"
                                href="https://ckweb.thedevelopers.company/wp-content/uploads/2023/03/app-release.apk">
                                <span>CK MOBILE WALLET</span>
                            </a>
                        </form>
                    </div>
                </div>
            </nav>
        </header> 
    </>
  )
}
