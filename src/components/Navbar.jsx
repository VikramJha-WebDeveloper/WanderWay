import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

import Login from "../sections/Login";

import Registration from "../sections/Registration";

const NavSection = styled.div`
  nav {
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
      rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  }
  nav.navbar {
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    z-index: 1;
  }
  .nav-link {
    padding-left: 1rem;
    padding-right: 1rem;
  }
  .dropdown-menu {
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
      rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  }
  .dropdown-item.active {
    background-color: teal;
  }
  .form-check-input:checked {
    background-color: teal;
    border-color: white;
  }
  .dropdown-menu[data-bs-popper] {
    right: 0;
    left: auto;
    top: 31px;
  }
  .navbar-nav .nav-link.active {
    background: teal;
    color: white;
  }
  .logout {
  }
  .logout:hover {
    background: teal;
  }
`;

const Navbar = ({ knowName, userName, logoutUser }) => {
  return (
    <NavSection>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <div>
            <NavLink className="navbar-brand m-0" to="/">
              WanderWay
              <img className="me-3" src="/WanderWay/brandLogo.png" />
            </NavLink>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mt-2 mt-lg-0 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link rounded" to="/">
                  Home
                </NavLink>
              </li>
              {userName ? (
                <>
                  <li className="nav-item">
                    <NavLink className="nav-link rounded" to="/book">
                      Book
                    </NavLink>
                  </li>
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Packages
                    </a>
                    <ul className="dropdown-menu px-1">
                      <li>
                        <NavLink
                          className="dropdown-item rounded"
                          to="/packages/united-state"
                        >
                          United State
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          className="dropdown-item rounded"
                          to="/packages/india"
                        >
                          India
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          className="dropdown-item rounded"
                          to="/packages/france"
                        >
                          France
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          className="dropdown-item rounded"
                          to="/packages/germany"
                        >
                          Germany
                        </NavLink>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link rounded" to="/service">
                      Services
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link rounded" to="/gallery">
                      Gallery
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link rounded" to="/about">
                      About
                    </NavLink>
                  </li>
                </>
              ) : (
                <></>
              )}
            </ul>
            <div className="login_register">
              {userName ? (
                <div className="dropdown d-inline position-relative">
                  <button
                    className="btn btn-secondary dropdown-toggle bg-dark"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <span className="m-0 p-0 h6">
                      {userName} <i className="bi bi-person-fill"></i>
                    </span>
                  </button>
                  <ul className="dropdown-menu position-absolute bg-dark p-2">
                    <li>
                      <a
                        className="dropdown-item text-light logout rounded"
                        href="#"
                        onClick={logoutUser}
                      >
                        Logout
                      </a>
                    </li>
                  </ul>
                </div>
              ) : (
                <>
                  <button
                    className="btn btn-dark mx-1"
                    data-bs-toggle="modal"
                    data-bs-target="#loginModal"
                  >
                    Login
                  </button>
                  <button
                    className="btn btn-dark"
                    data-bs-toggle="modal"
                    data-bs-target="#registerModal"
                  >
                    Register
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </nav>
      <Registration />
      <Login knowName={knowName} />
    </NavSection>
  );
};

export default Navbar;
