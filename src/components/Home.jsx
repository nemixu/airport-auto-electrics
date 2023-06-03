import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import About from './About';
import Contact from './Contact';
import Navbar from './Navbar';
import Services from './Services';

function Home() {
  const svg = (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <path
        fill="#273036"
        fillOpacity="1"
        d="M0,224L80,218.7C160,213,320,203,480,208C640,213,800,235,960,234.7C1120,235,1280,213,1360,202.7L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
      ></path>
    </svg>
  );
  const [isTopButtonVisible, setTopButtonVisible] = useState(false);
  const handleScroll = () => {
    if (window.scrollY > 700) {
      setTopButtonVisible(true);
    } else if (window.scrollY < 600) {
      setTopButtonVisible(false);
    }
  };
  const handleTopButtonClick = () => {
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <>
      <Navbar />
      <div className="white-overlay"></div>
      <div className="nav-background"></div>

      <section className="bg-image" id="home">
        {/* {svg} */}
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <h1 className="landing-text display-4 text-white">
                Airport Auto Electrics
              </h1>
              <p className="sub-landing-text text-white">
                Leading specialist in vehicle electrics
              </p>
              <a
                href="tel:+353872309097"
                target="_blank"
                className="btn btn-call"
                rel="noreferrer"
              >
                <i className="fas fa-calendar-alt pr-2"></i>CALL US TODAY
              </a>
            </div>
          </div>
        </div>
      </section>
      <About />
      <Services />
      <Contact />

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
            {/* <FontAwesomeIcon icon={faHeart} /> */}
          </a>
        </div>
      )}
    </>
  );
}

export default Home;
