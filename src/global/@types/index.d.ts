declare module '*.png';

export type NavigateProps = {
  navigate: (screen) => void;
};

export type StackNavigationGoBack = {
  goBack: () => void;
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
