/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { handleMobileDropdown } from "../../common/navbar";

const Navbar = ({ nr, theme }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    // Function to handle scroll event
    const handleScroll = () => {
      // Check if the window scroll position is greater than 200px
      if (window.pageYOffset > 200) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Attach the scroll event listener to the window
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      ref={nr}
      className={`navbar navbar-expand-lg change ${
        theme === "themeL" ? "light" : ""
      } ${isScrolled ? "nav-scroll" : ""}`}
    >
      <div className="container">
        <Link legacyBehavior href="/">
          <a className="logo">NimeshLathiya</a>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          onClick={handleMobileDropdown}
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="icon-bar">
            <i className="fas fa-bars"></i>
          </span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              {/* <Link legacyBehavior href="/blog">
                <a className="nav-link hover-underline-animation">blog</a>
              </Link> */}
            </li>

            <li className="nav-item">
              <Link legacyBehavior href="/#about">
                <a className="nav-link hover-underline-animation">About</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link legacyBehavior href="/#portfolio">
                <a className="nav-link hover-underline-animation">portfolio</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link legacyBehavior href="/#contact">
                <a className="nav-link hover-underline-animation">Contact</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
