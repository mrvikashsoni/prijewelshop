import React from "react";
import { Link } from "react-router-dom";

export default function TopHeader() {
  return (
    <header
      className="container-fluid text-white"
      style={{ background: "var(--bg_dark_blue)" }}
    >
      <div className="container text-center py-3">
        <div className="row align-items-center">
          <div className="col-12 col-lg-4 justify-content-sm-center d-flex gap-4">
            <div className="d-flex gap-1">
              <img src="./img/wts.svg" alt="whatsapp icon" />
              <small> 9279707246</small>
            </div>
            <div className="d-flex gap-1">
              <img src="./img/mail.svg" alt="mail icon" />
              <small> prijewelshop@gmail.com</small>
            </div>
          </div>
          <div className="col-12 col-lg-4 justify-content-sm-center ">
            <small>Contact Us For Order & Get More Discount</small>
          </div>
          <div className="col-12 col-lg-4  justify-content-sm-center d-flex gap-2 justify-content-end">
            <div>
              <small>Follow Us :</small>
            </div>
            <div className="d-flex justify-content-between gap-2">
              <div>
                <Link to="https://www.instagram.com/prijewel/" target="_blank">
                  <img src="./img/insta.svg" alt=" insta icon" />
                </Link>
              </div>
              <div>
                <Link to="https://www.facebook.com/prijewels" target="_blank">
                  <img src="./img/fb.svg" alt=" insta icon" />
                </Link>
              </div>
              <div>
                <Link
                  to="https://www.youtube.com/@prijewelshop"
                  target="_blank"
                >
                  <img src="./img/yt.svg" alt=" insta icon" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
