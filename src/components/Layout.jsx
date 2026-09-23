import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Navbar from './Navbar';
import ScrollManager from './ScrollManager';

function Layout() {
  const [isTopButtonVisible, setTopButtonVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 700) {
        setTopButtonVisible(true);
      } else if (window.scrollY < 600) {
        setTopButtonVisible(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleTopButtonClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <>
      <ScrollManager />
      <Navbar />
      <div className="white-overlay"></div>
      <div className="nav-background"></div>

      <Outlet />

      <Footer />

      {isTopButtonVisible && (
        <div className="totop-button shadow-sm rounded-circle" id="top-button">
          <a
            className="totop-link d-flex h-100"
            aria-label="to top button"
            onClick={handleTopButtonClick}
          >
            <FontAwesomeIcon
              icon={faArrowUp}
              className="fa-arrow-up text-white mx-auto my-auto"
            />
          </a>
        </div>
      )}
    </>
  );
}

export default Layout;
