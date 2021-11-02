import { extendTheme, ThemeConfig } from '@chakra-ui/react';

const colors = {
  bg: {
    light: '#F8F9FA',
    dark: '#0A0B1A',
  },
  blue: {
    primary: '#1A1B41',
    secondary: '#2269A9',
  },
  text: {
    400: '#ADB5BD',
    600: '#6C757D',
    light: '#0A0B1A',
    dark: '#F8F9FA',
  },
};

const fonts = {
  fonts: {
    poppins: 'Poppins',
  },
};

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
};

const theme = extendTheme({ colors, config, fonts });
export default theme;
