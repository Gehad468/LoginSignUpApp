import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,TextInput,Button,Image} from 'react-native';
import mainStyles from '../mainStyle';
import { SafeAreaView } from 'react-native-safe-area-context';

const LoginScreen = () => {
    return (
        
    <SafeAreaView >
    <ScrollView contentContainerStyle={{ height: '100%' }}>
        <View style={mainStyles.mainContainer}>
             <Image source={require('../assets/favicon.png')} style={{width: 30, height: 30}} />
            <Text style={mainStyles.mainText}>Username:</Text>
            <TextInput  />
            <Text style={mainStyles.mainText}>Password:</Text>
            <TextInput />
            <Button title="Login" />
          
        </View>
        </ScrollView>
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({

  
  });

export default LoginScreen;