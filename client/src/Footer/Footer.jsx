import React from "react";
import "./footer.css";

export default function Footer() {
  return (
    <footer
      style={{ backgroundColor: "#e8e8e8" }}
      class="page-footer font-small blue pt-4 mt-5"
    >
      <div class="container-fluid text-center text-md-left">
        <div class="row">
          <div class="col-md-3 mb-md-0 mb-3">
            <h5 class="text-uppercase">ABOUT US</h5>

            <ul class="list-unstyled">
              <li>
                <a href="#!">FAQ</a>
              </li>
              <li>
                <a href="#!">Anti-Scam</a>
              </li>
              <li>
                <a href="#!">Terms</a>
              </li>
              <li>
                <a href="#!">Privacy</a>
              </li>
            </ul>
          </div>
          <div class="col-md-3 mb-md-0 mb-3">
            <h5 class="text-uppercase">CONTACT & SITEMAP</h5>

            <ul class="list-unstyled">
              <li>
                <a href="#!">Contact Us</a>
              </li>
              <li>
                <a href="#!">Sitemap</a>
              </li>
            </ul>
          </div>
          <div class="col-md-3 mb-md-0 mb-3">
            <h5 class="text-uppercase">MY ACCOUNT</h5>

            <ul class="list-unstyled">
              <li>
                <a href="#!">Log In</a>
              </li>
              <li>
                <a href="#!">Register</a>
              </li>
            </ul>
          </div>

          <div class="col-md-3 mb-md-0 mb-3">
            <h5 class="text-uppercase">FOLLOW US ON</h5>

            <ul class="list-unstyled">
              <li>
                <a href="#!">FaceBook</a>
              </li>
              <li>
                <a href="#!">Insta</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="footer-copyright text-center py-3">
        © 2021 Shopping Cart. All Rights Reserved.
      </div>
    </footer>
  );
}
