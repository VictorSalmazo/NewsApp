import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './src/pages/Home';
import AddNews from './src/pages/Add';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home} 
          />
        <Stack.Screen
          name="AddNews"
          component={AddNews} 
          options={{title: "Cadastro de Notícias"}}
          />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

