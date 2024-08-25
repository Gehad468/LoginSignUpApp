import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView, Alert } from 'react-native';
import mainStyles from '../mainStyle';
import FormField from '../components/FormField';
import CustomButton from '../components/CustomButton';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { logIn } from '../utils/auth';

const LoginScreen = () => {
    const [form, setForm] = useState({ email: '', password: '' });
    const [isLogin, setIsLogin] = useState(false);
    const navigation = useNavigation();

    const handleLogin = async () => {
        if (form.email === '' || form.password === '') {
            Alert.alert('Error', 'Please fill in all the fields');
            return;
        }

        const result = await logIn(form.email, form.password);
        setIsLogin(true);
        try {
            setIsLogin(false);
            if (result.success) {
                navigation.navigate('Home');
            } else {
                Alert.alert('Error', result.message);
            }

        } catch (error) {
            setIsLogin(false);
            Alert.alert('Error', error.message);

        }
    };

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}>
                <View style={mainStyles.mainContainer}>
                    <View style={mainStyles.logoContainer}>
                        <Image source={require('../assets/Images/122.png')} style={{ height: 200 }} resizeMode='contain' />
                    </View>
                    <Text style={mainStyles.mainTitle}>Login to our website</Text>
                    <FormField
                        title="Email"
                        placeholder="Enter your email here"
                        value={form.email}
                        handleCheckText={(e) => setForm({ ...form, email: e })}
                        otherStyles={{ marginButton: 7 }}
                        keyboardType="email-address"
                    />
                    <FormField
                        title="Password"
                        placeholder="Enter your password here"
                        value={form.password}
                        handleCheckText={(e) => setForm({ ...form, password: e })}
                        otherStyles={{ marginButton: 7 }}
                        secureTextEntry={true}
                    />
                    <CustomButton
                        title="Sign in"
                        handlePress={handleLogin}
                        style={{ marginButton: 10 }}
                        isLoading={isLogin}
                    />
                    <View style={mainStyles.linkContainer}>
                        <Text style={mainStyles.signUpText}>Don't have an account? </Text>
                        <Text
                            onPress={() => navigation.navigate('SignUp')}
                            style={mainStyles.signUpLink}
                        >
                            Sign Up
                        </Text>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    logoContainer: {
        flexDirection: 'row',
        paddingBottom: 30,
        paddingTop: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },

    title: {
        fontSize: 23,
        fontWeight: 'bold',
        color: '#e1dec8',
        marginBottom: 20,
    },
    signUpText: {
        textAlign: 'center',
        fontSize: 15,
        color: '#fff',
    },
    signUpLink: {
        textDecorationLine: 'none',
        color: '#d5cb75',
    },
});

export default LoginScreen;
