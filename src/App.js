import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Login from './components/Login';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ThemeProvider} from './context/ThemeContext';
import {UserProvider} from './context/UserContext';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <ThemeProvider>
      <UserProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Login">
            <Stack.Screen name="Login" component={Login} />
          </Stack.Navigator>
        </NavigationContainer>
      </UserProvider>
    </ThemeProvider>
  );
};

export default App;

const styles = StyleSheet.create({});
