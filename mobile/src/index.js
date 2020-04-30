import 'react-native-gesture-handler';
import './config/ReactotronConfig';

import React from 'react';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';

import { NavigationContainer } from '@react-navigation/native';

import Routes from './routes';

import store from './store';

import colors from './styles/colors';

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <>
          <StatusBar barStyle="light-content" backgroundColor={colors.dark} />
          <Routes />
        </>
      </NavigationContainer>
    </Provider>
  );
}
