import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Header from './components/Header';
import Home from './pages/Home';
import Cart from './pages/Cart';

import colors from './styles/colors';

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator
      headerBackTitleVisible={false}
      headerLayoutPreset="center"
      screenOptions={({ navigation }) => ({
        headerTitle: () => <Header {...navigation} />,
        headerStyle: {
          backgroundColor: colors.dark,
        },
        headerLeft: null,
      })}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Cart" component={Cart} />
    </Stack.Navigator>
  );
}
