import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <Link
          to="/"
          className="nav-link me-md-5 me-sm-2 d-flex justify-content-center"
        >
          <div className="navbar-brand text-white">
            <p className="m-0 p-3">Star Wars</p>
          </div>
        </Link>
        <div
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <button type="button" className="btn btn-dark">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="#FFFFFF"
              className="bi bi-three-dots navbar-toggler-icon"
              viewBox="0 0 16 16"
            >
              <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
            </svg>
          </button>
        </div>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/" className="nav-link navbar-element">
                <div className="text-white nav-element">
                  <p className="m-0 ps-sm-2 ps-md-0">Home</p>
                </div>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/characters" className="nav-link navbar-element">
                <div className="text-white nav-element">
                  <p className="m-0 ps-sm-2 ps-md-0">Characters</p>
                </div>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/planets" className="nav-link navbar-element">
                <div className="text-white nav-element">
                  <p className="m-0 ps-sm-2 ps-md-0">Planets</p>
                </div>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/vehicles" className="nav-link navbar-element">
                <div className="text-white nav-element">
                  <p className="m-0 ps-sm-2 ps-md-0">Vehicles</p>
                </div>
              </Link>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle btn btn-primary text-white"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Favourites
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
