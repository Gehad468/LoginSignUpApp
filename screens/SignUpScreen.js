import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import mainStyles from '../mainStyle';
const SignUpScreen = () => {
    return (
        <View  style={mainStyles.mainContainer}>
            <Text style= {mainStyles.mainText}>Sign Up Screen</Text>
            <Button  title="Login" onPress={()=>{
            }} >Login</Button>
            <StatusBar style="auto" />
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
    },
  });

export default SignUpScreen;