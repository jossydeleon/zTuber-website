import {useEffect, useState} from 'react';
import useSSR from './useSSR';

export const useDarkMode = () => {
  //Hook SSR
  const {isBrowser} = useSSR();
  const [theme, setTheme] = useState('light');

  /**
   *
   * */
  const toggleTheme = () => {
    if (theme === 'light') {
      window.localStorage.setItem('theme', 'dark');
      setTheme('dark');
    } else {
      window.localStorage.setItem('theme', 'light');
      setTheme('light');
    }
  };

  useEffect(() => {
    if (isBrowser) {
      const localTheme = window.localStorage.getItem('theme');
      localTheme && setTheme(localTheme);
    }
  }, [isBrowser]);

  return [theme, toggleTheme];
};
