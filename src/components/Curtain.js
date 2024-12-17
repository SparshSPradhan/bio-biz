// import React, { useState, useEffect } from "react";
// import "./Curtain.css";

// function Curtain() {
//   const [isVisible, setIsVisible] = useState(true);

//   useEffect(() => {
//     // Hide the curtain after 3 seconds
//     const timer = setTimeout(() => {
//       setIsVisible(false);
//     }, 3000);
//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <div className={`curtain ${isVisible ? "visible" : "hidden"}`}>
//       <div className="curtain-content">
//         <h1>Welcome to BioBiz</h1>
//       </div>
//     </div>
//   );
// }

// export default Curtain;


import React, { useState, useEffect } from "react";
import "./Curtain.css";

function Curtain() {
  const [isVisible, setIsVisible] = useState(true);
  const [welcomeMessage, setWelcomeMessage] = useState("");

  useEffect(() => {
    // Dynamic message based on time
    const hour = new Date().getHours();
    if (hour < 12) {
      setWelcomeMessage("Good Morning! Welcome to BioBiz");
    } else if (hour < 18) {
      setWelcomeMessage("Good Afternoon! Welcome to BioBiz");
    } else {
      setWelcomeMessage("Good Evening! Welcome to BioBiz");
    }

    // Hide curtain after 4 seconds
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`curtain ${isVisible ? "visible" : "hidden"}`}>
      <div className="curtain-left"></div>
      <div className="curtain-right"></div>
      <div className="curtain-content">
        <img src="/Users/sparshs.pradhan/biobiz-homepage/public/biobiz-logo.png" alt="BioBiz Logo" className="curtain-logo" />
        <h1>{welcomeMessage}</h1>
        <div className="loading-bar"></div>
      </div>
    </div>
  );
}

export default Curtain;
