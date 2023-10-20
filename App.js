import Login from './components/Login/Login';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Dashboard from './components/Dashboard/Dashboard.js';
import AddCatch from './components/AddCatch/AddCatch';

import SignUp from './components/SignUp/SignUp';

import AddLure from './components/AddLure/AddLure';


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen
          name='Login'
          options={{
            headerShown: false
          }}
          component={Login}
        />
         <Stack.Screen
          name='SignUp'
          options={{
            headerShown: false
          }}
          component={SignUp}
        />
        <Stack.Screen
          name='Dashboard'
          options={{
            headerShown: false
          }}
          component={Dashboard}
        />
        <Stack.Screen
          name='AddCatch'
          options={{
            headerShown: false
          }}
          component={AddCatch}
        />
        <Stack.Screen
          name='AddLure'
          options={{
            headerShown: false
          }}
          component={AddLure}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
