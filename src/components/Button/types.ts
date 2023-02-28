import { TouchableOpacityProps } from 'react-native';

type Button = {
  title: string;
};

export type buttonType = TouchableOpacityProps & Button;
