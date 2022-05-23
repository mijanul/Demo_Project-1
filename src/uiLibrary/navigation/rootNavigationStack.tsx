import React, {useEffect, useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from 'react-native-splash-screen';
import AsyncStorage from '@react-native-async-storage/async-storage';

import LoginContainer from '../../screens/login/loginContainer';
import HomeContainer from '../../screens/home/homeContainer';

export type RootStackParamList = {
  Login: undefined;
  Home: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootNavigationStack = () => {
  const [initialRoute, setInitialRoute] = useState<string | null>(null);

  useEffect(() => {
    async function getLoginStatus() {
      let loginCred = await AsyncStorage.getItem('Login_cred');
      try {
        if (!!loginCred) setInitialRoute('Home');
        else setInitialRoute('Login');
      } catch {
        setInitialRoute('Login');
      }
      SplashScreen.hide();
    }
    getLoginStatus();
   
  }, []);
  return !!initialRoute && (
    <Stack.Navigator
      initialRouteName={initialRoute as "Login" | "Home"}
      screenOptions={{
        animation: 'slide_from_right',
        animationTypeForReplace: 'push',
        gestureEnabled: true,
        headerShown: false,
        headerShadowVisible: false,
      }}>
      <Stack.Screen name="Login" component={LoginContainer} />
      <Stack.Screen name="Home" component={HomeContainer} />
    </Stack.Navigator>
  );
};

export default RootNavigationStack;
