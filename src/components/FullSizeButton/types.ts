import { TouchableOpacityProps } from 'react-native';

type Button = {
  title: string;
  icon: string;
};

export type buttonType = TouchableOpacityProps & Button;
