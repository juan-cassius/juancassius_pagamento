import React from 'react';
import { useFonts } from 'expo-font';

const CustomFonts = ({ children }) => {
    let [fontsLoaded] = useFonts({
      'Montserrat-Medium': require('../assets/fonts/Montserrat-Medium.ttf'),
      'Montserrat-Regular': require('../assets/fonts/Montserrat-Regular.ttf'),
      'Montserrat-SemiBold': require('../assets/fonts/Montserrat-SemiBold.ttf'),
    });

  if (!fontsLoaded) {
    return null; // ou um spinner ou outra view enquanto as fontes carregam
  }

  return children;
};

export default CustomFonts;
