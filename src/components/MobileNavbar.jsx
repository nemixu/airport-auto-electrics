import React, { useState } from 'react';

//todo pass props of the state of if nav is open do the functionality in home as overlays live in home and clicks.
function MobileNavbar() {
  const [isMobileNavOpen, setMobileNavOpen] = useState(false);

  const handleBurgerIconClick = () => {
    setMobileNavOpen(true);
  };

  const handleMobileNavBgClick = () => {
    setMobileNavOpen(false);
  };

  const handleMobileNavItemClick = () => {
    setMobileNavOpen(false);
  };

  return (
    <>
      <li className="list-inline-item d-block d-lg-none">
        <a
          aria-label="open navigation button"
          className="burger-button"
          href="#"
          value="none"
          onClick={handleBurgerIconClick}
        >
          <i className="fas fa-bars fa-lg text-black"></i>
        </a>
      </li>
      <div className="mobile-nav">
        <div className="mobile-nav-inner">
          <ul className="mobile-nav-links">
            <li className="mobile-nav-link-items text-black">
              <a className="text-black anchor-fill" aria-label="home" href="">
                <i className="fas fa-home pr-2"></i>Home
              </a>
            </li>
            <li className="mobile-nav-link-items text-black">
              <a
                className="text-black anchor-fill"
                aria-label="classNamees"
                href=""
              >
                <i className="fas fa-shopping-basket pr-2"></i>About
              </a>
            </li>
            <li className="mobile-nav-link-items text-black">
              <a
                className="text-black anchor-fill"
                aria-label="services"
                href=""
              >
                <i className="fas fa-envelope pr-2"></i>Services
              </a>
            </li>
            <li className="mobile-nav-link-items text-black">
              <a
                className="text-black anchor-fill"
                aria-label="contact"
                href=""
              >
                <i className="fas fa-envelope pr-2"></i>Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default MobileNavbar;
