import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import {GlobalStyles} from '../styles/GlobalStyles';
import {theme} from '../styles/theme';
import { Analytics } from '@vercel/analytics/react'
;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Component {...pageProps} />
      <Analytics />
    </ThemeProvider>
  );
}

export default MyApp;
