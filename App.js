// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PaymentScreen from './screens/PaymentScreen';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Pagamento"
          component={PaymentScreen}
          options={{
            title: 'Pagamento',
            headerStyle: {
              backgroundColor: '#006557',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: '200',
            }
          }
          }
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;