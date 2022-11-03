import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import LoginComponent from './loginComponent';
import {LoginPayload} from '../../models/authModels';
import {navigate} from '../../utils/rootNavigations';

const LoginContainer = () => {
  const onSubmit: (payload: LoginPayload) => void = async (
    payload: LoginPayload,
  ) => {
    await AsyncStorage.setItem('Login_cred', JSON.stringify(payload));
    navigate('Home');
  };

  return <LoginComponent onSubmit={onSubmit} />;
};

interface LoginContainerProps {}

export default LoginContainer;
