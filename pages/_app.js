import '../styles/index.css';
import {ThemeProvider} from 'styled-components';
import {darkTheme, GlobalStyles} from '../styles/themeConfig';

function MyApp({Component, pageProps}) {
  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
