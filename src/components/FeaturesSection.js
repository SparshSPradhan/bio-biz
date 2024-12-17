// import React from "react";

// function FeaturesSection() {
//   return (
//     <section id="features" className="py-5">
//       <div className="container">
//         <h2 className="text-center mb-4">Our Features</h2>
//         <div className="row">
//           <div className="col-md-4">
//             <div className="card shadow-sm">
//               <div className="card-body text-center">
//                 <h5 className="card-title">Feature 1</h5>
//                 <p className="card-text">Description of the first feature.</p>
//               </div>
//             </div>
//           </div>
//           <div className="col-md-4">
//             <div className="card shadow-sm">
//               <div className="card-body text-center">
//                 <h5 className="card-title">Feature 2</h5>
//                 <p className="card-text">Description of the second feature.</p>
//               </div>
//             </div>
//           </div>
//           <div className="col-md-4">
//             <div className="card shadow-sm">
//               <div className="card-body text-center">
//                 <h5 className="card-title">Feature 3</h5>
//                 <p className="card-text">Description of the third feature.</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default FeaturesSection;





import React from "react";
import "./FeaturesSection.css";

function FeaturesSection() {
  const features = [
    {
      icon: "fas fa-bolt",
      title: "Fast Performance",
      description: "Experience lightning-fast speeds with our optimized solutions.",
    },
    {
      icon: "fas fa-shield-alt",
      title: "Secure Solutions",
      description: "Your data is safe with our cutting-edge security measures.",
    },
    {
      icon: "fas fa-users",
      title: "User Friendly",
      description: "Our interfaces are designed with users in mind for seamless experiences.",
    },
  ];

  return (
    <section id="features" className="features-section py-5">
      <div className="container">
        <h2 className="text-center mb-5">Our Features</h2>
        <div className="row">
          {features.map((feature, index) => (
            <div className="col-md-4" key={index}>
              <div className="feature-card shadow-sm text-center p-4">
                <div className="icon mb-4">
                  <i className={`${feature.icon}`}></i>
                </div>
                <h5 className="card-title">{feature.title}</h5>
                <p className="card-text">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturesSection;
