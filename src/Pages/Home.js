import React, { useEffect, useRef } from "react";

export default function Home() {
  const videoEl = useRef(null);

  const attemptPlay = () => {
    videoEl &&
      videoEl.current &&
      videoEl.current.play().catch((error) => {
        console.error("Error attempting to play", error);
      });
  };
  useEffect(() => {
    attemptPlay();
  }, []);

  return (
    <>
      <section className="txt-content bg-black">
        <video
          className="w-100 position-relative"
          playsInline
          loop
          muted
          controls
          alt="All the devices"
          src="assest/video/bg-video.mp4"
          ref={videoEl}
          style={{ height: "100%" }}
        />
        <div className="container-fluid">
          <div className="row  d-flex justify-content-center align-items-center">
            <div className="col-md-12 display-content">
              <div className="p-5 pb-md-0">
                <div className="h1 fsize-3 text-uppercase fw-bold font-family-akira">
                  CinemaKoin Multi - Utility Coin
                </div>
                <ul className="text-white mx-auto wd-55 font-family-Helvetica lh-lg">
                  <li className="fsize-1">
                    Cinemaverse for Metaverse Enthusiast
                  </li>
                  <li className="fsize-1">
                    Cinemachain for Developers & Community
                  </li>
                  <li className="fsize-1">C-Swap for Traders & Investors</li>
                  <li className="fsize-1">
                    Cine-Marketplace for Artist & Creators
                  </li>
                </ul>
                <div className="h1 fsize-3 text-center text-uppercase fw-bold font-family-akira">
                  Join the Revolution
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
