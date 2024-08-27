import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView, Alert, ActivityIndicator  } from 'react-native';
import mainStyles from '../mainStyle';
import FormField from '../components/FormField';
import CustomButton from '../components/CustomButton';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';   

import { signUp } from '../utils/auth'; 

const SignUpScreen = () => {
  const [form, setForm] = useState({ email: '', password: '', name: '', confirmPassword: '' });
  const [isLoading, setIsLoading] = useState(false); 

  const navigation = useNavigation();

  const handleSignUp = async () => {
    setIsLoading(true);

    if (form.password !== form.confirmPassword) {
      Alert.alert('Error', 'Passwords do not match');
      setIsLoading(false); 
      return;
    }

    if (!form.confirmPassword || !form.email || !form.password || !form.name) {
      Alert.alert('Error', 'All fields are required');
      setIsLoading(false); 
      return;
    }

    try {
      const result = await signUp(form.email, form.password);

      if (result.success) {
        navigation.navigate('Login');
      } else {
        Alert.alert('Error', result.message);
      }
    } catch (error) {
      Alert.alert('Error', error.message);
    } finally {
      setIsLoading(false); 
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}>
        <View style={mainStyles.mainContainer}>
          <View style={mainStyles.logoContainer}>
            <Image source={require('../assets/Images/122.png')} style={{ height: 200 }} resizeMode='contain' />
          </View>
          <Text style={mainStyles.mainTitle}>Register on our website</Text>
          <FormField
            title="Name"
            placeholder="Enter your name"
            value={form.name}
            handleCheckText={(e) => setForm({ ...form, name: e })}
            otherStyles={{ marginBottom: 7 }}
          />
          <FormField
            title="Email"
            placeholder="Enter your email"
            value={form.email}
            handleCheckText={(e) => setForm({ ...form, email: e })}
            otherStyles={{ marginBottom: 7 }}
            keyboardType="email-address"
          />
          <FormField
            title="Password"
            placeholder="Enter your password"
            value={form.password}
            handleCheckText={(e) => setForm({ ...form, password: e })}
            otherStyles={{ marginButton: 7 }}
            secureTextEntry={true}
          />
          <FormField
            title="Confirm Password"
            placeholder="Rewrite your password"
            value={form.confirmPassword}
            handleCheckText={(e) => setForm({ ...form, confirmPassword: e })}
            otherStyles={{ marginBottom: 7 }}
            secureTextEntry={true}
          />

          {isLoading ? ( 
            <ActivityIndicator size="large" color="#eff" />
          ) : (
            <CustomButton
              title="Sign Up"
              handlePress={handleSignUp}
              style={{ marginBottom: 10 }}
            />
          )}

          <View style={mainStyles.linkContainer}>
            <Text style={mainStyles.signUpText}>Have an account already ? </Text>
            <Text style={mainStyles.signUpLink} onPress={() => navigation.navigate('Login')}>
              Log In
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 20,
    }
});

export default SignUpScreen;
