import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../store/appContext.js";
import "./navbar.css";

export const Navbar = () => {
  const { store, actions } = useContext(Context);

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
                {store.favourites.length > 0 ? (
                  <>
                    {store.favourites.map((item, index) => (
                      <li key={index}>
                        <Link to={`/`}>{item.name}</Link>
                        <div className="d-flex justify-content-end">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-trash-fill"
                            viewBox="0 0 16 16"
                          >
                            <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
                          </svg>
                        </div>
                      </li>
                    ))}
                  </>
                ) : (
                  <div className="d-flex justify-content-center">(empty)</div>
                )}
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
