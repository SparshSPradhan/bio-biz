import React from "react";

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <a className="navbar-brand" href="#">
          <strong>BioBiz</strong>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link active" href="#home">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#features">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#features">
                Features
              </a>
            </li><li className="nav-item">
              <a className="nav-link" href="#features">
                India Updates
              </a>
            </li><li className="nav-item">
              <a className="nav-link" href="#features">
                Opportunities
              </a>
            </li><li className="nav-item">
              <a className="nav-link" href="#features">
                BioBiz Consulting
              </a>
            </li><li className="nav-item">
              <a className="nav-link" href="#features">
                Innovative Insights
              </a>
            </li><li className="nav-item">
              <a className="nav-link" href="#features">
                BRING
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
