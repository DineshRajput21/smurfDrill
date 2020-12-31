import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import PhoneScreen from './src/screens/phoneAuth/PhoneScreen';
import OTPScreen from './src/screens/phoneAuth/OTPScreen';
import SuccessScreen from './src/screens/phoneAuth/SuccessScreen';
import Login from './src/screens/Login';
import Account from './src/screens/Account';
import Home from './src/screens/Home';
import {Provider} from 'react-redux';
import store from './src/redux/store';

const App = () => {
  const Stack = createStackNavigator();
  return (
    <Provider store={store}>
    <NavigationContainer >
       <Stack.Navigator>
          <Stack.Screen name='Phone Number' component={PhoneScreen}/>
          <Stack.Screen name='OTP Screen' component={OTPScreen}/>
          <Stack.Screen name='successScreen' component={SuccessScreen} options={{title : ''}}/>
          <Stack.Screen name='account' component={Account} />
          <Stack.Screen name='home' component={Home} />
       </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  );
};

export default App;
