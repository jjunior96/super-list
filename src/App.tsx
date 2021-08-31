import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { ThemeProvider } from 'styled-components';

import AppLoading from 'expo-app-loading';
import { useFonts,  Roboto_400Regular, Roboto_700Bold } from "@expo-google-fonts/roboto";

import theme from './global/styles/theme';
import Dashboard from './pages/Dashboard';

export default function App() {
  const [fontsLoaded] = useFonts({ 
    Roboto_400Regular,
    Roboto_700Bold
  }); 
  
  if (!fontsLoaded) { 
    return <AppLoading />
  }

  return (
    <ThemeProvider theme={theme}>
      <Dashboard />
    </ThemeProvider>
  );
}
