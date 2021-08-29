// import original module declarations
import 'styled-components';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    name: string;
    body: string;
    colors: {
      primary: string;
      secondary: string;
      paragraph: string;
    };
    fontSizes: {
      small: string;
      medium: string;
      large: string;
    };
    navigation: {
      background: string;
    };
    footer: {
      background: string;
    };
  }
}
