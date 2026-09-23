import {
  faBars,
  faBell,
  faCartShopping,
  faCircleInfo,
  faHouse,
  faPhone,
  faVideo,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

function MobileNavbar() {
  const [isMobileNavOpen, setMobileNavOpen] = useState(false);
  const [isNavBackgroundVisible, setNavBackgroundVisible] = useState(false);
  const navRef = useRef(null);

  const handleBurgerIconClick = (event) => {
    event.stopPropagation();
    setMobileNavOpen(!isMobileNavOpen);
    setNavBackgroundVisible(!isMobileNavOpen);
  };

  const handleMobileNavBgClick = () => {
    setMobileNavOpen(false);
    setNavBackgroundVisible(false);
  };

  const closeMobileNav = () => {
    setMobileNavOpen(false);
    setNavBackgroundVisible(false);
  };

  useEffect(() => {
    if (!isMobileNavOpen) {
      return;
    }
    const handleClickOutside = (event) => {
      if (
        navRef.current &&
        !navRef.current.contains(event.target) &&
        !event.target.classList.contains('burger-button')
      ) {
        setMobileNavOpen(false);
        setNavBackgroundVisible(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isMobileNavOpen]);

  const mobileNavClasses = classNames('mobile-nav', {
    transition: isMobileNavOpen,
    active: isMobileNavOpen,
  });

  const navBackgroundClasses = classNames('nav-background', {
    'overlay-nav': isMobileNavOpen,
  });

  return (
    <>
      <li className="list-inline-item d-block d-lg-none">
        <button
          aria-label="open navigation button"
          className="btn burger-button"
          value="none"
          onClick={handleBurgerIconClick}
        >
          <FontAwesomeIcon icon={faBars} />
        </button>
      </li>
      <div className={mobileNavClasses} ref={navRef}>
        <div className="mobile-nav-inner">
          <ul className="mobile-nav-links">
            <li className="mobile-nav-link-items text-white">
              <Link
                className="text-white anchor-fill"
                aria-label="home"
                to="/#home"
                onClick={closeMobileNav}
              >
                <FontAwesomeIcon icon={faHouse} />
                <span className="nav-link-text px-2">Home</span>
              </Link>
            </li>
            <li className="mobile-nav-link-items text-white">
              <Link
                className="text-white anchor-fill"
                aria-label="about"
                to="/#about"
                onClick={closeMobileNav}
              >
                <FontAwesomeIcon icon={faCircleInfo} />
                <span className="nav-link-text px-2">About</span>
              </Link>
            </li>
            <li className="mobile-nav-link-items text-white">
              <Link
                className="text-white anchor-fill"
                aria-label="services"
                to="/#services"
                onClick={closeMobileNav}
              >
                <FontAwesomeIcon icon={faCartShopping} />
                <span className="nav-link-text px-2">Services</span>
              </Link>
            </li>
            <li className="mobile-nav-link-items text-white">
              <Link
                className="text-white anchor-fill"
                aria-label="car alarms"
                to="/car-alarms"
                onClick={closeMobileNav}
              >
                <FontAwesomeIcon icon={faBell} />
                <span className="nav-link-text px-2">Car Alarms</span>
              </Link>
            </li>
            <li className="mobile-nav-link-items text-white">
              <Link
                className="text-white anchor-fill"
                aria-label="dash cams"
                to="/dash-cams"
                onClick={closeMobileNav}
              >
                <FontAwesomeIcon icon={faVideo} />
                <span className="nav-link-text px-2">Dash Cams</span>
              </Link>
            </li>
            <li className="mobile-nav-link-items text-white">
              <Link
                className="text-white anchor-fill"
                aria-label="contact"
                to="/#contact"
                onClick={closeMobileNav}
              >
                <FontAwesomeIcon icon={faPhone} />
                <span className="nav-link-text px-2">Contact</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      {isNavBackgroundVisible && (
        <div
          className={navBackgroundClasses}
          onClick={handleMobileNavBgClick}
        />
      )}
    </>
  );
}

export default MobileNavbar;
