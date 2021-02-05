import React, { useState } from "react";

import "./Disclaimer.scss";

const Disclaimer = () => {
  const [hideDisclaimer, setHideDisclaimer] = useState(false);

  return (
    <div className={hideDisclaimer ? "disclaimer--hidden" : "disclaimer"}>
      <h2 className="disclaimer__text">Disclaimer</h2>
      <p className="disclaimer__text">
        This app is was made exclusively for the screen size of an iPhone 5
      </p>
      <p className="disclaimer__text">
        As such, this app will work on other sizes but the display of it is
        capped to 320x568px.
      </p>
      <button
        className="disclaimer__button"
        onClick={() => setHideDisclaimer(true)}
      >
        Dismiss
      </button>
    </div>
  );
};

export default Disclaimer;
