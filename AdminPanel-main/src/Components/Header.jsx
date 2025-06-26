import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="header-content">
        <nav className="navbar navbar-expand">
          <div className="collapse navbar-collapse justify-content-between">
            <div className="header-left">
              <div className="search_bar dropdown">
                <span
                  className="search_icon p-3 c-pointer"
                  data-toggle="dropdown"
                >
                  <i className="mdi mdi-magnify"></i>
                </span>
                <div className="dropdown-menu p-0 m-0">
                  <form>
                    <input
                      className="form-control"
                      type="search"
                      placeholder="Search"
                      aria-label="Search"
                    />
                  </form>
                </div>
              </div>
            </div>

            <ul className="navbar-nav header-right">
              <li className="nav-item dropdown notification_dropdown">
                <Link
                  className="nav-link"
                  to="#"
                  role="button"
                  data-toggle="dropdown"
                >
                  <i className="mdi mdi-bell"></i>
                  <div className="pulse-css"></div>
                </Link>
                <div className="dropdown-menu dropdown-menu-right">
                  <ul className="list-unstyled">
                    <li className="media dropdown-item">
                      <span className="success">
                        <i className="ti-user"></i>
                      </span>
                      <div className="media-body">
                        <Link to="#">
                          <p>
                            <strong>Martin</strong> has added a{" "}
                            <strong>customer</strong> Successfully
                          </p>
                        </Link>
                      </div>
                      <span className="notify-time">3:20 am</span>
                    </li>
                    <li className="media dropdown-item">
                      <span className="primary">
                        <i className="ti-shopping-cart"></i>
                      </span>
                      <div className="media-body">
                        <Link to="#">
                          <p>
                            <strong>Jennifer</strong> purchased Light Dashboard
                            2.0.
                          </p>
                        </Link>
                      </div>
                      <span className="notify-time">3:20 am</span>
                    </li>
                    <li className="media dropdown-item">
                      <span className="danger">
                        <i className="ti-bookmark"></i>
                      </span>
                      <div className="media-body">
                        <Link to="#">
                          <p>
                            <strong>Robin</strong> marked a{" "}
                            <strong>ticket</strong> as unsolved.
                          </p>
                        </Link>
                      </div>
                      <span className="notify-time">3:20 am</span>
                    </li>
                    <li className="media dropdown-item">
                      <span className="primary">
                        <i className="ti-heart"></i>
                      </span>
                      <div className="media-body">
                        <Link to="#">
                          <p>
                            <strong>David</strong> purchased Light Dashboard
                            1.0.
                          </p>
                        </Link>
                      </div>
                      <span className="notify-time">3:20 am</span>
                    </li>
                    <li className="media dropdown-item">
                      <span className="success">
                        <i className="ti-image"></i>
                      </span>
                      <div className="media-body">
                        <Link to="#">
                          <p>
                            <strong>James</strong> has added a{" "}
                            <strong>customer</strong> Successfully
                          </p>
                        </Link>
                      </div>
                      <span className="notify-time">3:20 am</span>
                    </li>
                  </ul>
                  <Link className="all-notification" to="#">
                    See all notifications <i className="ti-arrow-right"></i>
                  </Link>
                </div>
              </li>
              <li className="nav-item dropdown header-profile">
                <Link
                  className="nav-link"
                  to="#"
                  role="button"
                  data-toggle="dropdown"
                >
                  <i className="mdi mdi-account"></i>
                </Link>
                <div className="dropdown-menu dropdown-menu-right">
                  <Link to="./app-profile.html" className="dropdown-item">
                    <i className="icon-user"></i>
                    <span className="ml-2">Profile </span>
                  </Link>
                  <Link to="./email-inbox.html" className="dropdown-item">
                    <i className="icon-envelope-open"></i>
                    <span className="ml-2">Inbox </span>
                  </Link>
                  <Link to="./page-login.html" className="dropdown-item">
                    <i className="icon-key"></i>
                    <span className="ml-2">Logout </span>
                  </Link>
                </div>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
