declare module '*.png';

export type NavigateProps = {
  goBack: () => void;
  navigate: (screeen: string, params?: unknown) => void;
};

export type RouteParams = {
  userId: string;
};

export type GenericFormInputType = {
  [name: string]: any;
};

export type FormInputType = {
  email: string;
  password: string;
};

export type UserDTO = {
  id: string;
  name: string;
  email: string;
  avatar_url?: string;
};
