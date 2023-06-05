import React from 'react'

export default function FaqPage() {
  return (
   <>
     <section className="text-center pb-5 bg-black" id="faq">
        <div className="heading py-3 py-md-5">
            <div className="h4 fw-bold font-family-akira">FREQUENTLY ASKED QUESTIONS</div>
        </div>
        <div className="container">
            <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header font-family-akira" id="headingOne">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse"
                            data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            What is Cinemaverse?
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne"
                        data-bs-parent="#accordionExample">
                        <div className="accordion-body font-family-Helvetica">
                            CinemaVerse is a next generation global platform that transcends real world entertainment.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header font-family-akira" id="headingTwo">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                            data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            What CK aims to be in the next 10 Years?
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo"
                        data-bs-parent="#accordionExample">
                        <div className="accordion-body font-family-Helvetica">
                            We aim to be the first Metaverse in the cinema world and become one of the largest and the
                            best Metaverse and NFT Marketplace.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed font-family-akira" type="button"
                            data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false"
                            aria-controls="collapseThree">
                            What is the Growth Potential?
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree"
                        data-bs-parent="#accordionExample">
                        <div className="accordion-body font-family-Helvetica">
                            The token has huge utility and international growth potential as Cinemaverse and Cinemachain
                            will use CK as fees.
                        </div>
                    </div>
                </div>
                <div className="accordion-item font-family-akira">
                    <h2 className="accordion-header" id="headingFour">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                            data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                            Will CK chain be Eco-Friendly?
                        </button>
                    </h2>
                    <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour"
                        data-bs-parent="#accordionExample">
                        <div className="accordion-body font-family-Helvetica">
                            Cinemachain will be completely based on the 'Proof-of-Stake Consensus Model' and hence will
                            have the least possible effect on the environment.
                        </div>
                    </div>
                </div>
                <div className="accordion-item font-family-akira">
                    <h2 className="accordion-header" id="headingFive">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                            data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                            Will CK have any Digital Wallet for CK and it's NFT's?
                        </button>
                    </h2>
                    <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive"
                        data-bs-parent="#accordionExample">
                        <div className="accordion-body font-family-Helvetica">
                            Cinemakoin will have it’s own wallet to store CK and its NFT's.
                        </div>
                    </div>
                </div>
                <div className="accordion-item font-family-akira">
                    <h2 className="accordion-header" id="headingSix">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                            data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                            How can I buy CK?
                        </button>
                    </h2>
                    <div id="collapseSix" className="accordion-collapse collapse" aria-labelledby="headingSix"
                        data-bs-parent="#accordionExample">
                        <div className="accordion-body font-family-Helvetica">
                            Join Waitlist to buy $Ck.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
   </>
  )
}
