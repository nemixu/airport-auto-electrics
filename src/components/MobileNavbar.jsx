import {
  faBars,
  faCartShopping,
  faCircleInfo,
  faHouse,
  faPhone,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import React, { useEffect, useRef, useState } from 'react';

function MobileNavbar() {
  const [isMobileNavOpen, setMobileNavOpen] = useState(false);
  const [isNavBackgroundVisible, setNavBackgroundVisible] = useState(false);
  const navRef = useRef(null);

  const handleBurgerIconClick = (event) => {
    event.stopPropagation();
    setMobileNavOpen(true);
    setNavBackgroundVisible(true);
  };

  const handleMobileNavBgClick = () => {
    setMobileNavOpen(false);
    setNavBackgroundVisible(false);
  };

  const handleMobileNavItemClick = (event, targetId) => {
    event.preventDefault();
    setMobileNavOpen(false);
    setNavBackgroundVisible(false);
    scrollToSection(targetId);
  };

  const scrollToSection = (targetId) => {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
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
              <a
                className="text-white anchor-fill"
                aria-label="home"
                href="#home"
                onClick={(event) => handleMobileNavItemClick(event, 'home')}
              >
                <FontAwesomeIcon icon={faHouse} />
                <span className="nav-link-text px-2">Home</span>
              </a>
            </li>
            <li className="mobile-nav-link-items text-white">
              <a
                className="text-white anchor-fill"
                aria-label="classNamees"
                href="#about"
                onClick={(event) => handleMobileNavItemClick(event, 'about')}
              >
                <FontAwesomeIcon icon={faCircleInfo} />
                <span className="nav-link-text px-2">About</span>
              </a>
            </li>
            <li className="mobile-nav-link-items text-white">
              <a
                className="text-white anchor-fill"
                aria-label="services"
                href="#services"
                onClick={(event) => handleMobileNavItemClick(event, 'services')}
              >
                <FontAwesomeIcon icon={faCartShopping} />
                <span className="nav-link-text px-2">Services</span>
              </a>
            </li>
            <li className="mobile-nav-link-items text-white">
              <a
                className="text-white anchor-fill"
                aria-label="contact"
                href="#contact"
                onClick={(event) => handleMobileNavItemClick(event, 'contact')}
              >
                <FontAwesomeIcon icon={faPhone} />
                <span className="nav-link-text px-2">Contact</span>
              </a>
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
