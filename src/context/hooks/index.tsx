import React, { useContext } from 'react';
import { AuthContext } from '../AuthContext';
import { context } from '../types';

export const useAuth = (): context => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth deve ser usado em um AuthProvider.');
  }

  return context;
};
