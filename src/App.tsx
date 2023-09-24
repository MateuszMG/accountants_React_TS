import { BrowserRouter } from 'react-router-dom';
import { GlobalStyle } from './utils/theme/GlobalStyle';
import { Routes } from './routes/Routes';
import { Theme, themeVariants } from './utils/theme/themeVariants';
import { ThemeProvider } from 'styled-components';
import { ToastContainer } from 'react-toastify';

export const App = () => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={themeVariants[Theme.LIGHT]}>
        <GlobalStyle />
        <ToastContainer position='bottom-left' />
        <Routes />
      </ThemeProvider>
    </BrowserRouter>
  );
};
