import React from "react";
import styles from "./Navbar.module.css";
import { NavLink, Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="py-3 ">
      <div className="container ">
        <div className="d-flex flex-wrap align-items-center justify-content-center ">
          <div>
            <spam style={{ color: "var(--bg_dark_sec)" }}>
              <Link to="/" className={`nav-link ${styles.nav_link}`}>
                <h4>Prijewel</h4>
              </Link>
            </spam>
          </div>

          <div>
            <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
              <li>
                <NavLink to="/home" className={`nav-link ${styles.nav_link}`}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/earring"
                  className={`nav-link ${styles.nav_link}`}
                >
                  Earring
                </NavLink>
              </li>
              {/* <li>
              <NavLink to="/necklace" className={`nav-link ${styles.nav_link}`}>
                Necklace
              </NavLink>
            </li> */}
              <li>
                <NavLink to="/tikka" className={`nav-link ${styles.nav_link}`}>
                  Tikka
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/bracelet"
                  className={`nav-link ${styles.nav_link}`}
                >
                  Bracelet
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/nosePin"
                  className={`nav-link ${styles.nav_link}`}
                >
                  NosePin
                </NavLink>
              </li>
              {/* <li>
              <NavLink to="/sareePin" className={`nav-link ${styles.nav_link}`}>
                SareePin
              </NavLink>
            </li> */}
              <li>
                <NavLink to="/combo" className={`nav-link ${styles.nav_link}`}>
                  Combo
                </NavLink>
              </li>
            </ul>
          </div>

          {/* <form
            className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3"
            role="search"
          >
            <label for="exampleDataList" className="form-label">
              Datalist example
            </label>
            <input
              className="form-control"
              list="datalistOptions"
              id="exampleDataList"
              placeholder="Type to search..."
            />
            <datalist id="datalistOptions">
              <option value="bracelet" />
              <option value="earring" />
              <option value="necklace" />
              <option value="nose pin" />
              <option value="combo" />
              <option value="tikka" />
            </datalist>
          </form> */}

          {/* <div className="text-end">
            <button type="button" className="btn btn-outline-dark me-2">
              Contact Form
            </button>
          </div> */}
        </div>
      </div>
      <hr />
    </header>
  );
}
