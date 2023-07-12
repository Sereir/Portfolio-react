import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

export default function UpArrow() {
  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = () => {
    if (!showScroll && window.scrollY > 60) {
      setShowScroll(true);
    } else if (showScroll && window.scrollY <= 60) {
      setShowScroll(false);
    }
  };

  const scrollTop = () => {
    const c = document.documentElement.scrollTop || document.body.scrollTop;
    if (c > 0) {
      window.requestAnimationFrame(scrollTop);
      window.scrollTo(0, c - c / 8  );
    }
  };

  window.addEventListener("scroll", checkScrollTop);

  return (
    <div className="uparrow">
      <button
        id="return-to-top"
        className={showScroll ? "show-scroll" : "hide-scroll"}
        onClick={scrollTop}
      >
    <FontAwesomeIcon icon={faArrowUp} className="arrow-icon"/>
      </button>
    </div>
  );
}