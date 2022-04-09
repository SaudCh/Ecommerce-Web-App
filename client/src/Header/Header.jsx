import {
  faPhoneAlt,
  faSearch,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import { AuthContext } from "../Authentication/auth";
import "./Header.css";

export default function Header(props) {
  const context = useContext(AuthContext);
  const history = useHistory();
  //console.log(context);
  const logout = () => {
    context.logout();
    history.push("/");
  };

  return (
    <div>
      <nav className="container-fluid  my-4">
        <div className="row align-items-center">
          <div className="col-12 col-md-4 my-2 my-lg-0 text-center ">
            <p className="m-0 p-0">
              <FontAwesomeIcon icon={faPhoneAlt} /> Order Online or Call us at:{" "}
            </p>
          </div>
          <div className="col-12 col-md-4 my-2 my-lg-0 text-center">
            <p className="m-0 fw-bold h1" style={{ color: "#fe9126" }}>
              SHOPPING CART
            </p>
          </div>
          <div className="col-12 col-md-4 my-2 my-lg-0 text-center">
            <form class="d-flex col-12 col-lg-8">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button
                class="btn text-white"
                style={{ backgroundColor: "#fe9126" }}
                type="submit"
              >
                <FontAwesomeIcon icon={faSearch} />
              </button>
            </form>
          </div>
        </div>
      </nav>
      <nav
        class="navbar navbar-expand-md navbar-dark"
        style={{ backgroundColor: "#fe9126" }}
      >
        <div class="container-fluid">
          <Link class="navbar-brand" href="#"></Link>

          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0 nav-ul">
              <li class="nav-item">
                <Link class="nav-link  text-white" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link  text-white" to="/products">
                  Items
                </Link>
              </li>

              <li class="nav-item">
                <Link
                  class="nav-link text-white"
                  to="/checkout"
                  tabindex="-1"
                  aria-disabled="true"
                >
                  Checkout
                </Link>
              </li>
              {/* <li class="nav-item">
                <Link
                  class="nav-link text-white"
                  to="#"
                  tabindex="-1"
                  aria-disabled="true"
                >
                  Contact
                </Link>
              </li>
              <li class="nav-item">
                <Link
                  class="nav-link text-white"
                  to="#"
                  tabindex="-1"
                  aria-disabled="true"
                >
                  About Us
                </Link> 
              </li>*/}
              {!context.isLoggedIn ? (
                <li class="nav-item">
                  <Link
                    class="nav-link text-white"
                    to="/login"
                    tabindex="-1"
                    aria-disabled="true"
                  >
                    Login
                  </Link>
                </li>
              ) : (
                <li class="nav-item">
                  <button
                    className="btn text-white"
                    style={{
                      backgroundColor: "#fe9126",
                      outline: "none",
                      border: "none",
                    }}
                    class="nav-link text-white"
                    onClick={() => logout()}
                    tabindex="-1"
                    aria-disabled="true"
                  >
                    Logout
                  </button>
                </li>
              )}
            </ul>
            <Link
              to={context.isLoggedIn ? "/cart" : "/login"}
              className="btn text-white"
            >
              <FontAwesomeIcon icon={faShoppingCart} />
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}
