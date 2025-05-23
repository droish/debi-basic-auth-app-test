import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';
import axios from 'axios'; 
import { useRouter } from 'expo-router';

const SignupForm = () =>    {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const router = useRouter();

    const handleSignup = async () => {
        if (!email || !username || !password) {
            setError('All fields are required.');
            setSuccess('');
            return;
        }
        setError('');
        setSuccess('');
        try {
            // await axios.post('http://localhost:5000/api/signup', {
            //     email,
            //     username,
            //     password,
            // });
            setSuccess('Signed up successfully!');
            setTimeout(() => {
                router.replace('/removeUser');
            }, 1000);
        } catch (err) {
            setError(err.response?.data?.message || 'Signup failed.');
        }
    };

    return (
        <View>
            {error ? <Text style={styles.error}>{error}</Text> : null}
            {success ? <Text style={styles.success}>{success}</Text> : null}
            <TextInput
                style={styles.input}
                placeholder="Username"
                value={username}
                onChangeText={setUsername}
                autoCapitalize="none"
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />
            <Button title="Sign Up" onPress={handleSignup} />
        </View>
    );
};

const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        borderColor: '#d1d5db',
        borderRadius: 8,
        padding: 12,
        marginBottom: 16,
        backgroundColor: '#f9fafb',
    },
    error: {
        color: 'red',
        marginBottom: 12,
        textAlign: 'center',
    },
    success: {
        color: 'green',
        marginBottom: 12,
        textAlign: 'center',
    },
});

export default SignupForm;