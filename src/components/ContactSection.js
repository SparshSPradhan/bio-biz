// import React from "react";

// function ContactSection() {
//   return (
//     <section id="contact" className="bg-light py-5">
//       <div className="container">
//         <h2 className="text-center mb-4">Contact Us</h2>
//         <form>
//           <div className="mb-3">
//             <label className="form-label">Name</label>
//             <input type="text" className="form-control" />
//           </div>
//           <div className="mb-3">
//             <label className="form-label">Email</label>
//             <input type="email" className="form-control" />
//           </div>
//           <div className="mb-3">
//             <label className="form-label">Message</label>
//             <textarea className="form-control" rows="5"></textarea>
//           </div>
//           <button type="submit" className="btn btn-primary">
//             Submit
//           </button>
//         </form>
//       </div>
//     </section>
//   );
// }

// export default ContactSection;


import React from "react";
import "./ContactSection.css";

function ContactSection() {
  return (
    <section id="contact" className="contact-section py-5">
      <div className="container">
        <h2 className="text-center mb-4">Get in Touch</h2>
        <div className="row">
          {/* Contact Form */}
          <div className="col-md-6">
            <form className="contact-form">
              <div className="mb-3">
                <label className="form-label">Name</label>
                <input type="text" className="form-control" placeholder="Your Name" />
              </div>
              <div className="mb-3">
                <label className="form-label">Email</label>
                <input type="email" className="form-control" placeholder="Your Email" />
              </div>
              <div className="mb-3">
                <label className="form-label">Message</label>
                <textarea className="form-control" rows="5" placeholder="Your Message"></textarea>
              </div>
              <button type="submit" className="btn btn-primary w-100">
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="col-md-6">
            <div className="contact-info">
              <h5>Contact Information</h5>
              <p>
                <strong>Address:</strong> 1234 Business Avenue, Bengaluru, India
              </p>
              <p>
                <strong>Email:</strong> contact@biobiz.in
              </p>
              <p>
                <strong>Phone:</strong> +91 9876543210
              </p>

              {/* Social Links */}
              <div className="social-links">
                <h6>Follow Us:</h6>
                <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
                  <i className="fab fa-linkedin"></i>
                </a>
                <a href="https://wa.me/9876543210" target="_blank" rel="noreferrer">
                  <i className="fab fa-whatsapp"></i>
                </a>
                <a href="mailto:contact@biobiz.in">
                  <i className="fas fa-envelope"></i>
                </a>
                <a href="https://telegram.me/biobiz" target="_blank" rel="noreferrer">
                  <i className="fab fa-telegram-plane"></i>
                </a>
              </div>
            </div>

            {/* Map */}
            <div className="map-container mt-4">
              <iframe
                title="location-map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.135858278309!2d77.59714431535485!3d12.934426890877845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15dd48105f91%3A0x8fdb640d2a68a64c!2sBannerghatta%20Rd%2C%20Bengaluru%2C%20Karnataka%20560076!5e0!3m2!1sen!2sin!4v1600000000000!5m2!1sen!2sin"
                width="100%"
                height="250"
                style={{ border: "0" }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
