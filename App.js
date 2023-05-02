// In App.js in a new project

import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PaymentScreen from './screens/PaymentScreen';
// import { useFonts } from 'expo-font';
// import { useNavigation } from '@react-navigation/native'

// import * as SplashScreen from 'expo-splash-screen';

const Stack = createNativeStackNavigator();

function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Pagamento"
          component={PaymentScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;