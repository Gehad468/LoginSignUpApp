import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import mainStyles from '../mainStyle';
const HomeScreen = () => {
    return (
        <View style={mainStyles.mainContainer}>
            <Text style={mainStyles.mainText}>Welcome to the Home Screen!</Text>
            
            <StatusBar style="auto" />
        </View>
    );

}

const styles = StyleSheet.create({

});

export default HomeScreen;