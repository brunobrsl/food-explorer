import React from 'react';
import ReactDOM from 'react-dom/client';
import GlobalStyles from './styles/global';
import { ThemeProvider } from 'styled-components';

import { EditProduct } from './pages/EditProduct';

import theme from './styles/theme';

import 'react-image-crop/dist/ReactCrop.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <EditProduct />
    </ThemeProvider>
  </React.StrictMode>,
)
