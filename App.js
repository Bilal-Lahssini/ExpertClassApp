import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Homescreen from './screens/Homescreen';
import Login from './screens/Login'; 
import Feedscreen from './screens/Feedscreen'; 
import Categories from './screens/Categories'; 


const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen
          name="Welcome"
          component={Homescreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="Login" 
          component={Login}
        />
        <Stack.Screen 
          name="Categories" 
          component={Categories}
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="Feedscreen" 
          component={Feedscreen}
          options={{ headerShown: false }} 
        />
        {/* Add other screens here */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;