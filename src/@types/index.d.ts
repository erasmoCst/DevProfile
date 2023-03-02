declare module '*.png';

export type NavigateProps = {
  navigate: (screen) => void;
};

export type StackNavigationGoBack = {
  goBack: () => void;
};

export type FormInputType = {
  [name: string]: any;
};
