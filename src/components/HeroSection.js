// import React from "react";
// import "./HeroSection.css";

// function HeroSection() {
//   return (
//     <section id="home" className="hero-section">
//       {/* Background Video and Fallback */}
//       <div className="background-container">
//         <video className="background-video" autoPlay loop muted>
//         <source src={`${process.env.PUBLIC_URL}/assets/background-video.mp4`} type="video/mp4" />
//         Your browser does not support the video tag.
//         </video>
//         <img
//           src="/assets/fallback-image.jpg"
//           alt="Fallback"
//           className="background-fallback"
//         />
//       </div>

//       {/* Foreground Content */}
//       <div className="hero-content">
//         <h1 className="hero-title animate-fade-in">
//           Welcome to <span>BioBiz</span>
//         </h1>
//         <p className="hero-subtitle animate-slide-up">
//           Empowering businesses with cutting-edge solutions.
//         </p>
//         <a href="#features" className="btn btn-primary btn-lg animate-bounce">
//           Explore More
//         </a>
//       </div>

//       {/* Social Media Icons */}
//       <div className="social-icons">
//         <a
//           href="https://www.instagram.com"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="social-icon instagram"
//         >
//           <i className="fab fa-instagram"></i>
//         </a>
//         <a
//           href="https://www.linkedin.com"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="social-icon linkedin"
//         >
//           <i className="fab fa-linkedin"></i>
//         </a>
//         <a
//           href="https://wa.me/"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="social-icon whatsapp"
//         >
//           <i className="fab fa-whatsapp"></i>
//         </a>
//         <a
//           href="mailto:example@example.com"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="social-icon email"
//         >
//           <i className="fas fa-envelope"></i>
//         </a>
//         <a
//           href="https://t.me/"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="social-icon telegram"
//         >
//           <i className="fab fa-telegram-plane"></i>
//         </a>
//       </div>
//     </section>
//   );
// }

// export default HeroSection;
import React from "react";
import "./HeroSection.css";

function HeroSection() {
  return (
    <section id="home" className="hero-section">
      {/* Background Video */}
      <div className="background-container">
        <video
          className="background-video"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
        >
          <source
            src={`${process.env.PUBLIC_URL}/assets/background-video.mp4`}
            type="video/mp4"
          />
          <source
            src="https://www.w3schools.com/html/mov_bbb.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Foreground Content */}
      <div className="hero-content">
        <h1 className="hero-title">Welcome to <span>BioBiz</span></h1>
        <p className="hero-subtitle">Empowering businesses with cutting-edge solutions.</p>
        <a href="#features" className="btn btn-primary">Explore More</a>
      </div>
    </section>
  );
}

export default HeroSection;
