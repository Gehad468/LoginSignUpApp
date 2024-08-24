import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 

const FormField = ({ title, value, placeholder, handleCheckText, otherStyles, ...props }) => {
    const [showPassword, setShowPassword] = useState(false);
    const [isFocused, setIsFocused] = useState(false);

    return (
        <View style={[styles.container, otherStyles]}>
            <Text style={styles.text}>{title}</Text>
            <View style={[styles.inputContainer, isFocused && styles.focusedContainer]}>
                <TextInput
                    {...props}
                    value={value}
                    placeholder={placeholder}
                    onChangeText={handleCheckText}
                    style={styles.textInput}
                    placeholderTextColor="#e1dec8"
                    secureTextEntry={(title === 'Password'||title==='Confirm Password') && !showPassword}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                />
                {title === 'Password' && (
                    <TouchableOpacity
                        style={styles.iconContainer}
                        onPress={() => setShowPassword(!showPassword)}
                    >
                        <Ionicons
                            name={showPassword ? 'eye-off' : 'eye'}
                            size={20}
                            color="#aaa"
                        />
                    </TouchableOpacity>
                )}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
       marginBottom:15,

        
    },
    textInput: {
        color: 'white',
        flex: 1,
    },
    text: {
        fontSize: 16,
        fontWeight: 'bold',
        margin: 6,
        color: '#e7e3c2',
    },
    focusedContainer: {
        borderColor: '#dbfb',
    },
    inputContainer: {
        flexDirection: 'row',
        backgroundColor: '#111',
        borderWidth: 1.5,
        borderColor: '#222',
        paddingTop: 10,
        paddingBottom: 10,
        paddingHorizontal: 10,
        borderRadius: 10,
        height: 50,
    },
    iconContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 10,
    },
});

export default FormField;
