import React, { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';

import { MainLayout } from './layouts/MainLayout';

import './styles/App.css';
import './styles/theme.css';
import { ThemeProvider } from './context/theme/themeContext';

export const App: React.FC = () => {
  useEffect(() => {
    document.body.classList.add('enable-transitions');
  }, []);

  return (
    <ThemeProvider>
      <BrowserRouter>
        <MainLayout />
      </BrowserRouter>
    </ThemeProvider>
  );
};
