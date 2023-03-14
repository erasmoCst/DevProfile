import { ReactElement } from 'react';
import { FormInputType, UserDTO } from '../global/@types';

export type context = {
  user: UserDTO;
  signIn(credentials: FormInputType): void;
  signOut(): void;
  updateUser(user: UserDTO): void;
};

export type contextType = {
  children: ReactElement;
};

export type authState = {
  token: string;
  user: UserDTO;
};
