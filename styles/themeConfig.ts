import {createGlobalStyle, DefaultTheme} from 'styled-components';

const commonStyles = {
  fontSizes: {
    small: '0.8em',
    medium: '1em',
    large: '1.5em',
  },
};

export const lightTheme: DefaultTheme = {
  name: 'light',
  body: '#FFF',
  colors: {
    primary: '#a53860',
    secondary: '#da627d',
    paragraph: '#8e8e8e',
  },
  navigation: {
    background: 'rgb(236, 236, 236)',
  },
  footer: {
    background: 'rgb(236, 236, 236)',
  },
  ...commonStyles,
};

export const darkTheme: DefaultTheme = {
  name: 'dark',
  body: '#363537',
  colors: {
    primary: '#a53860',
    secondary: '#da627d',
    paragraph: '#FAFAFA',
  },
  navigation: {
    background: '#2e2e2d',
  },
  footer: {
    background: '#2e2e2d',
  },
  ...commonStyles,
};

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({theme}) => theme.body};
    color: ${({theme}) => theme.colors.paragraph};
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    transition: all 0.50s linear;
  }
`;
