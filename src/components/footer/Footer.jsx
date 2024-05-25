import React from "react";
import styles from "./Footer.module.css";
import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <>
      {/* <!-- ---------------------------------------------------------------Footer --> */}
      <footer>
        <div className="footer">
          <div className={styles.foot_container1}>
            <div className={styles.foot1}>
              <ul>
                <li>
                  <NavLink className={styles.nav_link} to="/home">
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink className={styles.nav_link} to="/earring">
                    Earring
                  </NavLink>
                </li>
                {/* <li>
                  <NavLink className={styles.nav_link} to="/necklace">
                    Necklace
                  </NavLink>
                </li> */}
                <li>
                  <NavLink className={styles.nav_link} to="/tikka">
                    Tikka
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className={styles.foot1}>
              <ul>
                <li>
                  <NavLink className={styles.nav_link} to="/bracelet">
                    Bracelet
                  </NavLink>
                </li>
                <li>
                  <NavLink className={styles.nav_link} to="/nosePin">
                    Nose Pin
                  </NavLink>
                </li>
                <li>
                  <NavLink className={styles.nav_link} to="/combo">
                    Combo
                  </NavLink>
                </li>
                {/* <li>
                  <NavLink className={styles.nav_link} to="/blogs">
                    Jira
                  </NavLink>
                </li> */}
              </ul>
            </div>
            <div className={styles.foot1}>
              <ul>
                <li>
                  <NavLink
                    className={styles.nav_link}
                    to="https://www.instagram.com/prijewel/"
                    target="_blank"
                  >
                    INSTAGRAM
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className={styles.nav_link}
                    to="https://www.facebook.com/prijewels"
                    target="_blank"
                  >
                    FACEBOOK
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className={styles.nav_link}
                    to="https://www.youtube.com/@prijewelshop"
                    target="_blank"
                  >
                    YOUTUBE
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className={`text-white ${styles.foot1}`}>
              <p>9279707246</p>

              <p>prijewelshop@gmail.com</p>
            </div>
          </div>
          <div className={styles.foot_container2}>
            <hr />
          </div>
          <div className={styles.foot_container3}>
            <div className={styles.foot_3}>
              <img
                src="./img/copyright.svg"
                alt="copyright"
                width="60%"
                height="60%"
              />
            </div>
            <div className={`text-white ${styles.foot_3}`}>
              <div className={styles.foot_3p1}>Prijewel</div>
              <div className="foot_3p">all rights reserved</div>
            </div>
          </div>
        </div>
      </footer>
      {/* <!-- =====================================================================================Home Page End --> */}
    </>
  );
}
