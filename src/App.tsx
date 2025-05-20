import React, { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import './styles/App.css';
import './styles/theme.css';
import { ThemeProvider } from './context/theme/themeContext';
import { AppRoutes } from './routes/AppRoutes';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { store } from './store/store';

const queryClient = new QueryClient();

export const App: React.FC = () => {
  useEffect(() => {
    document.body.classList.add('enable-transitions');
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <ThemeProvider>
          <BrowserRouter>
            <AppRoutes />
          </BrowserRouter>
        </ThemeProvider>
      </Provider>
    </QueryClientProvider>
  );
};
