import React, { useState, useEffect } from "react";
import "./styles/Navbar.css";
import Logo from "./../assets/CHATTER.png";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import { path } from "../Router/router";
import { auth } from "../firebase";
import { IoSettingsOutline } from "react-icons/io5";
import { BiLogOut } from "react-icons/bi";
import { RxDashboard } from "react-icons/rx";
import profile from "../assets/profile.png";

interface User {
  profileImage: string;
}

const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const user = auth.currentUser;
  const profileImage = user?.photoURL;

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setCurrentUser({ profileImage: user.photoURL } as User);
      } else {
        setCurrentUser(null);
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };

  const handleLogout = () => {
    auth
      .signOut()
      .then(() => {
        console.log("Logged out successfully");
      })
      .catch((error) => {
        console.log("Logout error:", error);
      });
  };

  return (
    <section className="parent-nav">
      <div className="navbar-container">
        <div>
          <Link to="/" className="navbarLogo">
            <img src={Logo} alt="logo" className="navbarLogoImg" />
          </Link>
        </div>
        <div className="hamburger" onClick={toggleMobileMenu}>
          {mobileMenuOpen ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>
        <div className={`navbarLinks ${mobileMenuOpen ? "open" : ""}`}>
          <ul>
            <li>
              <Link to={path.HOME}>Home</Link>
            </li>
            <li>
              <Link to={path.ABOUT}>About us</Link>
            </li>
            <li>
              <Link to={path.CONTACT}>Contact us</Link>
            </li>
            <li>
              <Link to={path.BLOG}>Blog</Link>
            </li>
          </ul>
          <div className="authButtonsContainer">
            {currentUser ? (
              <div className="profileCircle" onClick={toggleDropdown}>
                {currentUser.profileImage ? (
                  <img src={currentUser.profileImage} alt="Profile" />
                ) : (
                  <img
                  className="profileCircle"
                  src={profile}
                  alt="Default"
                />
                )}
                {dropdownOpen && (
                  <div className="dropdown">
                    <Link to={path.ACCOUNT}>
                      <button className="box">
                        <IoSettingsOutline className="dropdownIcon" />
                        Account
                      </button>
                    </Link>
                    <Link to={path.DASHBOARD}>
                      <button className="box">
                        <RxDashboard className="dropdownIcon" />
                        Dashboard
                      </button>
                    </Link>
                    <div onClick={handleLogout}>
                      <button className="box">
                        <BiLogOut className="dropdownIcon" />
                        Logout
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <>
                <div>
                  <Link to={path.LOGIN}>
                    <button className="authButton">
                      <div className="authButtonContent">
                        <div className="authButtonText">Log in</div>
                      </div>
                    </button>
                  </Link>
                </div>
                <div>
                  <Link to={path.REGISTER}>
                    <button className="authButton signupButton">
                      <div className="authButtonContent">
                        <div className="authButtonText">Sign up</div>
                      </div>
                    </button>
                  </Link>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
