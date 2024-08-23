import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/LoginScreen';
import SignUpScreen from './screens/SignUpScreen';
import HomeScreen from './screens/HomeScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Login">
            <Stack.Screen name="Login" component={LoginScreen}  options={{headerShown:false}}/>
            <Stack.Screen name="SignUp" component={SignUpScreen}  options={{headerShown:false}} />
            <Stack.Screen name="Home" component={HomeScreen}  options={{headerShown:false}}/>
          </Stack.Navigator>
          <StatusBar backgroundColor='#161622'> </StatusBar>
        </NavigationContainer>
    
  );
}