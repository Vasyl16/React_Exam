import React, { useEffect } from 'react';

import './styles/app.css';
import './styles/theme.css';
import { AppRoutes } from './routes/AppRoutes';
import { AppProvider } from './provider/AppProvider';

export const App: React.FC = () => {
  useEffect(() => {
    document.body.classList.add('enable-transitions');
  }, []);

  return (
    <AppProvider>
      <AppRoutes />
    </AppProvider>
  );
};
