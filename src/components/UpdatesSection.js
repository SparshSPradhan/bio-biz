import React from "react";
import "./UpdatesSection.css";

function UpdatesSection() {
  return (
    <section id="updates" className="updates-section py-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-4">Stay Updated</h2>
        <p className="text-center lead">
          Explore the latest updates, resources, and initiatives from BioBiz.
        </p>
        <div className="row justify-content-center mt-4">
          <div className="col-md-3 mb-3">
            <a href="https://biobiz.in/category/updates/" target="_blank"
              rel="noopener noreferrer" className="btn btn-primary btn-block">
              India Updates
            </a>
          </div>
          <div className="col-md-3 mb-3">
            <a href="https://biobiz.in/s/weekly" target="_blank"
              rel="noopener noreferrer" className="btn btn-primary btn-block">
              Weekly Updates
            </a>
          </div>
          <div className="col-md-3 mb-3">
            <a href="https://biobiz.in/s/bring" target="_blank"
              rel="noopener noreferrer" className="btn btn-primary btn-block">
              BRING
            </a>
          </div>
          <div className="col-md-3 mb-3">
            <a href="https://biobiz.in/s/bring/in/" target="_blank"
              rel="noopener noreferrer" className="btn btn-primary btn-block">
              India Biomass Residues
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default UpdatesSection;
