import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {LogBox} from 'react-native';

import {navigationRef} from './src/utils/rootNavigations';
import RootNavigationStack from './src/uiLibrary/navigation/rootNavigationStack';

const App = () => {
  LogBox.ignoreAllLogs();
  return (
    <SafeAreaProvider>
        <NavigationContainer ref={navigationRef}>
          <RootNavigationStack />
        </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
