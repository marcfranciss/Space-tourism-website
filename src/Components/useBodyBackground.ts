import { useEffect } from "react";
import { useLocation } from "react-router";

const backgroundImages: {
  [key: string]: { [key: string]: string};
} = {
  "/": {
    'desktop':"/src/assets/home/background-home-desktop.jpg", 'tablet': "/src/assets/home/background-home-tablet.jpg", 'mobile': "/src/assets/home/background-home-mobile.jpg"
  },
  "/destination": {
    'desktop':"/src/assets/destination/background-destination-desktop.jpg", 
    'tablet': "/src/assets/destination/background-destination-tablet.jpg", 
    'mobile': "/src/assets/destination/background-destination-mobile.jpg"
  },
  "/crew": {
    'desktop':"/src/assets/crew/background-crew-desktop.jpg", 
    'tablet': "/src/assets/crew/background-crew-tablet.jpg", 
    'mobile': "/src/assets/crew/background-crew-mobile.jpg"
  },
  "/technology": {
    'desktop':"/src/assets/technology/background-technology-desktop.jpg", 
    'tablet': "/src/assets/technology/background-technology-tablet.jpg", 
    'mobile': "/src/assets/technology/background-technology-mobile.jpg"
  }
};

const useBodyBackground = () => {
  const location = useLocation();
  useEffect(()=> {
    function updateBackground() {
      const currentPath = location.pathname;
      const images = backgroundImages[currentPath] || backgroundImages['/'];
      const deviceType = getDeviceType();
      const backgroundImage = images[deviceType] || images['desktop'];
      const style = document.body.style;

      /* Set background properties */
      style.backgroundImage = `url(${backgroundImage})`;
      style.backgroundSize = 'cover';
      style.backgroundPosition = 'center';

      /* Handle responsive adjustments */
      function handleResize() {
        const newDeviceType = getDeviceType();
        const newImage = backgroundImages[currentPath]?.[newDeviceType] || backgroundImages['/']['desktop'];
        style.backgroundImage=`url(${newImage})`;
      }
      
      /* Initial adjustment */
      handleResize();
      
      /* Update on resize */
      window.addEventListener('resize', handleResize);
      
      /* Cleanup on component unmount */
      return () => {
        window.removeEventListener('resize', handleResize);
        style.backgroundImage = '';
        style.backgroundSize = '';
        style.backgroundPosition = '';
      };
    };
    
    updateBackground();

  }, [location.pathname]);
  /* Function to determine device type based on screen width  */
  const getDeviceType = (): 'desktop' | 'tablet' | 'mobile' => {
    const width = window.innerWidth;
    if (width >= 1024) return 'desktop';
    if (width >= 768) return 'tablet';
    return 'mobile';
  }
};

export default useBodyBackground;
