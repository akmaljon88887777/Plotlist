import React, { useEffect, useState } from "react";
import './style.css'

export default () => {
  const [load, setLoad] = useState(false);
  useEffect(() => {
    setLoad(true);
    const time = setTimeout(() => {
      setLoad(false);
    }, 1000);
  }, []);
  if (load) {
    return (
      <div id="js-preloader" class="js-preloader">
        <div class="preloader-inner">
          <span class="dot"></span>
          <div class="dots">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    );
  }
};
