import React, { useEffect, useState } from "react";


const GoToTop = () => {
    const [isVisible, setIsVisible] = useState(false);
 const goToBtn = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };
  const listenToScroll = () => {
    let heightToHidden = 20;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    if (winScroll > heightToHidden) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () => window.removeEventListener("scroll", listenToScroll);
  }, []);

  return (
    <>
      {isVisible && (
        <div className="btn-bottom" onClick={goToBtn}>
            <img src="assest\images\upArrow.gif" alt=""style={{ maxHeight:"30px"}}/>
        </div>
         )}
    </>
  );
};



export default GoToTop;