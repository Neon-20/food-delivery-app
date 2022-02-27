import React, { Fragment, useState } from "react";
import "../../App.css";
import Search from "./Search";
import { Link, Route } from "react-router-dom";
import { useAlert } from "react-alert";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../actions/userActions";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const alert = useAlert();
  const dispatch = useDispatch();

  const { user, loading } = useSelector((state) => state.auth);
  const { cartItems } = useSelector((state) => state.cart);

  const logoutHandler = () => {
    dispatch(logout());
    alert.success("Logged out Successfully");
  };

  // const clickHandler = () => {
  //   console.log('Clicked')
  // }

  const mobileMenuHandler = () => {
    setMenuOpen(!menuOpen);
  }

  return (
    <Fragment>

      <nav className="navbar row navbar_color mobile_display navbar hidden-xs" style={{ height: "100px" }}>
        <div className="col-6 col-md-3 logo_mobile nav__link" style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          // justifyContent: 'center'
        }}>
          <div className="navbar-brand">
            <Link className="nav__link" to="/">
              <img
                src="/images/logo.png"
                alt="Logo"
                style={{ height: "50px" }}
              />
            </Link>
          </div>
          <div>
            <p style={{
              color: "white",
              fontSize: "20px",
              fontWeight: "bolder",
              marginTop: "15px",

            }}>We deliver happiness</p>
          </div>
        </div>

        <div className="col-12 col-md-6 mt-2 mt-md-0 search_mobile nav__link">
          <Route render={({ history }) => <Search history={history} />} />
        </div>

        <div className="col-6 col-md-3 mt-4 mt-md-0 text-center profile_mobile nav__link">
          <Link className="abc nav__link" to="/cart">

            <span id="cart" className="ml-3">
              Cart
            </span>
            <span className="ml-1" id="cart_count">
              {cartItems.length}
            </span>
          </Link>
          {user ? (
            <div className="ml-4 dropdown d-inline">
              <Link
                to="#!"
                className="btn dropdown-toggle text-white mr-3 nav__link"
                type="button"
                id="dropDownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <figure className="avatar avatar-nav">
                  <img
                    src={user.avatar && user.avatar.url}
                    alt={user && user.name}
                    className="rounded-circle"
                  />
                </figure>
                <span>{user && user.name}</span>
              </Link>

              <div
                className="dropdown-menu"
                aria-labelledby="dropDownMenuButton"
              >
                {user && user.roles === "admin" && (
                  <Link className="dropdown-item nav__link" to="/dashboard">
                    Dashboard
                  </Link>
                )}

                <Link className="dropdown-item nav__link" to="/orders/me">
                  Orders
                </Link>

                <Link className="dropdown-item nav__link" to="/me">
                  Profile
                </Link>

                <Link
                  className="dropdown-item text-danger nav__link"
                  to="/"
                  onClick={logoutHandler}
                >
                  Logout
                </Link>
              </div>
            </div>
          ) : (
            !loading && (
              <Link to="/login" className="btn ml-4 mpt5 nav__link" id="login_btn">
                Login
              </Link>
            )
          )}
        </div>
        <div className="hamburger" onClick={mobileMenuHandler} >
          <span className="line1"></span>
          <span className="line2"></span>
          <span className="line3"></span>
        </div>

      </nav>
    </Fragment>
  );
};

export default Header;
