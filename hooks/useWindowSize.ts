import React from 'react';

const useWindowSize = () => {
  const [isMobile, setIsMobile] = React.useState(false);
  const [isDesktop, setIsDesktop] = React.useState(false);
  const [width, setWidth] = React.useState(0);

  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      // Handler to call on window resize
      function handleResize() {
        const screenWidth = window.innerWidth;
        setWidth(screenWidth);
        setIsDesktop(screenWidth > 480);
        setIsMobile(screenWidth <= 480);
      }

      // Add event listener
      window.addEventListener('resize', handleResize);

      // Call handler right away so state gets updated with initial window size
      handleResize();

      // Remove event listener on cleanup
      return () => window.removeEventListener('resize', handleResize);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return {isMobile, isDesktop, width};
};

export default useWindowSize;
