import { useState, useEffect, useContext } from "react";
import logo from "../../assets/images/logo/logo.png";
import logoDark from "../../assets/images/logo/logo.png";
import { useLocation } from "react-router-dom";

//feather icons
import {
  FiAlignCenter,
  FiLogOut,
  FiMoon,
  FiMoreHorizontal,
  FiSettings,
  FiSun,
  FiUser,
} from "react-icons/fi";
//react router dom
import { Link, useNavigate } from "react-router-dom";

const MenuBar = (props) => {
  const location = useLocation();

  const [darkMode, setDarkMode] = useState(0);

  const enableDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const toggleMenu = () => {
    let mainNav = document.getElementsByClassName("main-nav");

    if (mainNav[0].classList[1] == "close_icon") {
      mainNav[0].classList.remove("close_icon");
    } else {
      mainNav[0].classList.add("close_icon");
    }
  };
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-only");
    } else {
      document.body.classList.remove("dark-only");
    }
  });

  let navigate = useNavigate();
  return (
    <div className="page-main-header">
      <div className="main-header-right row m-0">
        <div className="main-header-left">
          <div className="logo-wrapper">
            <Link to="/">
              <img
                className="img-fluid"
                src={logo}
                alt="logo"
                style={{ maxWidth: "110px" }}
              />
            </Link>
          </div>
          <div className="dark-logo-wrapper">
            <Link to="/">
              <img
                className="img-fluid"
                src={logoDark}
                alt=""
                style={{ maxWidth: "67px" }}
              />
            </Link>
          </div>
          <div className="toggle-sidebar" onClick={() => toggleMenu()}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-align-center status_toggle middle"
              id="sidebar-toggle"
            >
              <line x1={18} y1={10} x2={6} y2={10} />
              <line x1={21} y1={6} x2={3} y2={6} />
              <line x1={21} y1={14} x2={3} y2={14} />
              <line x1={18} y1={18} x2={6} y2={18} />
            </svg>
          </div>
        </div>

        <div className="nav-right col pull-right right-menu p-0">
          <ul className="nav-menus">
            <li>
              <FiUser />
            </li>
            {/* <li>
              <div className="mode">
                <i onClick={() => enableDarkMode()}>
                  {darkMode ? <FiSun className="color-white" /> : <FiMoon />}
                </i>
              </div>
  </li> */}

            <li className="onhover-dropdown p-0">
              <button className="btn btn-primary-light" type="button">
                <FiLogOut />
                Log out
              </button>
            </li>
          </ul>
        </div>
        <div className="d-lg-none mobile-toggle pull-right w-auto">
          {location.pathname === "/account" ? (
            <Link to="/">
              {" "}
              <FiSettings style={{ fontSize: "20px" }} />
            </Link>
          ) : (
            <Link to="/account">
              <FiUser style={{ fontSize: "20px" }} />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};
export default MenuBar;
