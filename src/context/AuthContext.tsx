import React, {
  createContext,
  FunctionComponent,
  useEffect,
  useState,
} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from 'react-native';
import { FormInputType, UserDTO } from '../global/@types';
import { api } from '../services/api';
import { authState, context, contextType } from './types';

export const AuthContext = createContext<context>({} as context);

const tokenData = '@DevProfile:token';
const userData = '@DevProfile:user';

export const AuthProvider: FunctionComponent<contextType> = ({ children }) => {
  const [data, setData] = useState<authState>({} as authState);

  const signIn = async ({ email, password }: FormInputType) => {
    try {
      const response = await api.post('sessions', { email, password });

      const { token, user } = response.data;

      await AsyncStorage.setItem(tokenData, token);
      await AsyncStorage.setItem(userData, JSON.stringify(user));

      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

      setData({ token, user });
    } catch (error) {
      Alert.alert(
        'Erro na autenticação',
        'Ocorreu um erro ao fazer login. \n Verifique as credenciais.',
      );
    }
  };

  const signOut = async () => {
    await AsyncStorage.removeItem(tokenData);
    await AsyncStorage.removeItem(userData);
    setData({} as authState);
  };

  const updateUser = async (user: UserDTO) => {
    await AsyncStorage.setItem(userData, JSON.stringify(user));
    setData({ user, token: data.token });
  };

  useEffect(() => {
    async function loadAuthData() {
      const token = await AsyncStorage.getItem(tokenData);
      const user = await AsyncStorage.getItem(userData);

      if (token && user) {
        setData({ token, user: JSON.parse(user) });
        api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      }
    }
    loadAuthData();
  }, []);

  return (
    <AuthContext.Provider
      value={{ user: data.user, signIn, signOut, updateUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};
