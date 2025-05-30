import React from 'react';
import { Header } from '../components/Header';
import { Outlet } from 'react-router-dom';

export const MainLayout: React.FC = () => {
  return (
    <>
      <Header />

      <Outlet />
    </>
  );
};
