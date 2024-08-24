import AsyncStorage from '@react-native-async-storage/async-storage';

let users = {
    'gehad@gmail.com': { password: '123456' }
};

const validateEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
};

export const signUp = async (email, password) => {
    if (users[email]) {
        return { success: false, message: 'User already exists' };
    }

    if (!validateEmail(email)) {
        return { success: false, message: 'Invalid email format' };
    }

    if (password.length < 6) {
        return { success: false, message: 'Password must be at least 6 characters long' };
    }

    users[email] = { password };
    await AsyncStorage.setItem('users', JSON.stringify(users));

    return { success: true, message: 'Signed up successful' };
};

export const logIn = async (email, password) => {
    const user = users[email];

    if (!validateEmail(email)) {
        return { success: false, message: 'Invalid email format' };
    }

    if (!user) {
        return { success: false, message: 'User does not exist' };
    }

    if (user.password !== password) {
        return { success: false, message: 'Incorrect password' };
    }

    await AsyncStorage.setItem('user', JSON.stringify({ email, password }));
    return { success: true, message: 'Login successful' };
};

export const isAuth = async () => {
    const user = await AsyncStorage.getItem('user');
    return user ? JSON.parse(user) : null;
};

export const getCurUser = async () => {
    const user = await AsyncStorage.getItem('user');
    return user ? JSON.parse(user) : null;
};
