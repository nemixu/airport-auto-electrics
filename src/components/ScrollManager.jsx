import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollManager() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');
      const scrollToId = () => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
          return true;
        }
        return false;
      };
      if (!scrollToId()) {
        const timeout = setTimeout(scrollToId, 100);
        return () => clearTimeout(timeout);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
}

export default ScrollManager;
