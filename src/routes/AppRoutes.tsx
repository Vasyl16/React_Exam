import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { MainLayout } from '../layouts/MainLayout';
import { Home } from '../pages/Home';
import { NotFound } from '../pages/NotFound';
import { MovieFull } from '../pages/MovieFull';

import { ROUTES } from '../constants/routes';

export const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path={ROUTES.HOME} element={<MainLayout />}>
        <Route index element={<Home />} />

        <Route path={ROUTES.MOVIE} element={<MovieFull />} />

        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};
