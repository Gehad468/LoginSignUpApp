import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView, Alert } from 'react-native';
import mainStyles from '../mainStyle';
import FormField from '../components/FormField';
import CustomButton from '../components/CustomButton';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
    const [form, setForm] = useState({ email: '', password: '' });
    const [isLogin, setIsLogin] = useState(false);
    const navigation = useNavigation();

    const validateEmail = (email) => {
        return /\S+@\S+\.\S+/.test(email);
    };

    const handleLogin = () => {
        if (!validateEmail(form.email)) {
            Alert.alert('Invalid email format');
            return;
        }

        if (form.password.length < 6) {
            Alert.alert('Password must be at least 6 characters');
            return;
        }

        navigation.navigate('Home');
    };

    return (
        <SafeAreaView>
            <ScrollView contentContainerStyle={{ height: '100%' }}>
                <View style={mainStyles.mainContainer}>
                    <View style={styles.logoContainer}>
                        <Image source={require('../assets/favicon.png')} resizeMode="contain" />
                    </View>
                    <Text style={styles.title}>Login to our website</Text>
                    <FormField
                        title="Email"
                        placeholder="Enter your email here"
                        value={form.email}
                        handleCheckText={(e) => setForm({ ...form, email: e })}
                        otherStyles={{ marginTop: 7 }}
                        keyboardType="email-address"
                    />
                    <FormField
                        title="Password"
                        placeholder="Enter your password here"
                        value={form.password}
                        handleCheckText={(e) => setForm({ ...form, password: e })}
                        otherStyles={{ marginTop: 7 }}
                        secureTextEntry={true}
                    />
                    <CustomButton
                        title="Sign in"
                        handlePress={handleLogin}
                        style={{ marginTop: 7 }}
                        isLoading={isLogin}
                    />
                    <View style={styles.container}>
                        <Text style={styles.signUpText}>Don't have an account? </Text>
                        <Text
                            onPress={() => navigation.navigate('SignUp')}
                            style={styles.signUpLink}
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
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 20,
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
