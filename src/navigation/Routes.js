import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import FormLogin from '../components/FormLogin';
import FormCadastro from '../components/FormCadastro';

const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="FormLogin">
        <Stack.Screen name="FormLogin" component={FormLogin} options={{ title: 'Login' }} />
        <Stack.Screen name="FormCadastro" component={FormCadastro} options={{ title: 'Cadastro' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
