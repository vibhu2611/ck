import React, { Component } from "react";
import Slider from "react-slick";

export default class VerticalMode extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 1.0,
      slidesToScroll: 1.0,
      vertical: true,
      verticalSwiping: true,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,

      beforeChange: function(currentSlide, nextSlide) {
      },
      afterChange: function(currentSlide) {
      }
    };
    return (
      < >
      <section className="py-5 bg-black">

      <Slider {...settings}>
      
      <div className="fheight">
                         <div className="d-md-flex d-grid px-2 px-md-5">
                             <div className="w-100 w-md-25 order-md-last order-first">
                               <div className="img-f-slider">
                               <img src="assest/images/g-1.png" className="rounded mx-auto d-block max-width-slide-img"
                                     alt="galler-1"/>
                               </div>
                             </div>
                             <div className="w-100 w-md-75 px-0 px-2 p-m">
                                 <p className="text-white text-start font-family-Helvetica">The He was recently awarded with Most Stylish Producer Of The Year at the prestigious Lokmat Most Stylish Awards. After lifting trophies for writing and filmmaking, Bollywood producer Shabbir Boxwala won big for putting his best fashion foot forward in the industry. The fifth edition of the award ceremony was recently held in Mumbai. It was attended by who's who of the entertainment, fashion, business, politics, and sports. He took to social media to thank his team and wrote, "Had a great evening at the Lokmat awards! Thank you #lokmat for honouring us with the most stylish producers of the year.</p>
                             </div>
                         </div>
                     </div>
         <div className="fheight">
                         <div className="d-md-flex d-grid px-2 px-md-5">
                             <div className="w-100 w-md-25 order-md-last order-first">
                             <div className="img-f-slider">
                               <img src="assest/images/g-2.png" className="rounded mx-auto d-block max-width-slide-img"
                                     alt="galler-1"/>
                               </div>
                             </div>
                             <div className="w-100 w-md-75 px-0 px-2 p-m">
                                 <p className="text-white text-start font-family-Helvetica">The From Tridev to Shershaah, Mr Shabbir Boxwala has come a long way. He has been a part of the Indian film industry for over three decades. Over the years, through his journey, he has blessed audiences with entertaining yet impactful content. Mr Boxwala wears many feathers in his hat, including producer, writer, and screenplay director. His farsighted and dynamic personality drives his fierce passion for achieving more. Despite working all these years, Mr Boxwala is unstoppable. He has ideated CinemaKoin, a 4-in-1 project, tapping areas of decentralised technology, something no one in the film industry has done so far.</p>
                             </div>
                         </div>
                     </div>
        <div className="fheight">
                         <div className="d-md-flex d-grid px-2 px-md-5">
                             <div className="w-100 w-md-25 order-md-last order-first">
                             <div className="img-f-slider">
                               <img src="assest/images/g-3.png" className="rounded mx-auto d-block max-width-slide-img"
                                     alt="galler-1"/>
                               </div>
                             </div>
                             <div className="w-100 w-md-75 px-0 px-2 p-m">
                                 <p className="text-white text-start font-family-Helvetica">The The Directed by Vishnu Varadhan, Shershaah is based on the life of Param Vir Chakra awardee Captain Vikram Batra, who sacrificed his life while recapturing Indian territory from Pakistani intruders during the Kargil War in 1999. Starring Sidharth Malhotra and Kiara Advani, the film was released on Amazon Prime Video on 12 August 2021. The film was nominated in 19 categories for the 67th Filmfare Awards, it won the following Best Film (Popular) – Shershaah Best Editing – A Sreekar Prasad (Shershaah) Best Action – Stefan Richter and Suniel Rodrigues (Shershaah) Producer Shabbir Boxwala and Captain Vikram Batra's twin brother Vishal Batra at the awards function.</p>
                             </div>
                         </div>
                     </div>
         <div className="fheight">
                         <div className="d-md-flex d-grid px-2 px-md-5">
                             <div className="w-100 w-md-25 order-md-last order-first">
                             <div className="img-f-slider">
                               <img src="assest/images/g-4.png" className="rounded mx-auto d-block max-width-slide-img"
                                     alt="galler-1"/>
                               </div>
                             </div>
                             <div className="w-100 w-md-75 px-0 px-2 p-m">
                                 <p className="text-white text-start font-family-Helvetica">The World Blockchain Summit is one of the most prominent global Blockchain events. CinemaKoin was proud to be associated with this prestigious event hosted in Dubai during 20-21st March 2023. World Blockchain Summit has a keen focus on amalgamating blockchain solution providers, business entities, and organizations willing to adopt blockchain technology. It provides a platform for technology providers to demonstrate their latest innovations designed to aid better productivity and functioning of existing businesses. It was an incentivizing opportunity for us to showcase our project on a global platform. The experience, exposure, and acceptance for CinemaKoin, at a global platform like the World Blockchain Summit, have been phenomenal. This was just an insight into our expertise and our vision. We will be unfolding more details soon.</p>
                             </div>
                         </div>
                     </div>
     </Slider>
      </section>
      </>
    );
  }
}