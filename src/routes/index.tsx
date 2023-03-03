import React, { FunctionComponent } from 'react';
import { useAuth } from '../context/hooks';
import { AppRoutes } from './app.routes';
import { AuthRoutes } from './auth.routes';

export const Routes: FunctionComponent = () => {
  const { user } = useAuth();

  return user?.id ? <AppRoutes /> : <AuthRoutes />;
};
