import { useEffect, useState } from "react";
import dashboard1 from "../../assets/images/dashboard/1.png";

//icons
import { FaAngleRight, FaCog, FaHospital } from "react-icons/fa";
//feather icons
import { FiHome, FiSettings, FiGift, FiUser } from "react-icons/fi";
import { Link, NavLink } from "react-router-dom";
import { RiBillLine } from "react-icons/ri";
const LeftSideBar = () => {
  const [screenSize, setScreenSize] = useState("");
  useEffect(() => {
    //Hide sidebar
    if (window.innerWidth <= 974) {
      setScreenSize(true);
    } else {
      setScreenSize(false);
    }
    window.addEventListener(
      "resize",
      () => {
        if (window.innerWidth <= 974) {
          setScreenSize(true);
        } else {
          setScreenSize(false);
        }
      },
      false
    );
  });

  return (
    // <header className="main-nav close_icon">
    <header className={`main-nav ${screenSize ? "close_icon" : ""}`}>
      <div className="sidebar-user text-center">
        <a className="setting-primary" href="#javascript">
          <FaCog />
        </a>
        <a href="/viho/app/users/userProfile">
          <img
            src={dashboard1}
            alt=""
            style={{ margin: "0 auto" }}
            className="img-90 rounded-circle media"
          />

          <h6 className="mt-3 f-14 f-w-600">Super Admin</h6>
        </a>
      </div>

      <nav>
        <div className="main-navbar">
          <div className="left-arrow" id="left-arrow">
            <i data-feather="arrow-left" />
          </div>
          <div id="mainnav">
            <ul className="nav-menu custom-scrollbar">
              <li className="back-btn">
                <div className="mobile-back text-end">
                  <span>Back</span>
                  <i className="fa fa-angle-right ps-2" aria-hidden="true">
                    <FaAngleRight />
                  </i>
                </div>
              </li>

              <li className="dropdown">
                <Link className={"nav-link menu-title"} to="/">
                  <i>
                    <FiHome />
                  </i>
                  <span>Dashboard</span>
                </Link>
              </li>
              <li className="dropdown">
                <NavLink
                  to="/admin/hospitals"
                  className={"nav-link menu-title"}
                >
                  <i>
                    <FaHospital />
                  </i>
                  <span>Hospital</span>
                </NavLink>
              </li>
              <li className="dropdown">
                <NavLink to="/account" className={"nav-link menu-title"}>
                  <i>
                    <RiBillLine />
                  </i>
                  <span>Bliings</span>
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="right-arrow" id="right-arrow">
            <i data-feather="arrow-right" />
          </div>
        </div>
      </nav>
    </header>
  );
};
export default LeftSideBar;
