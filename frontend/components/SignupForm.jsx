import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import axios from 'axios';
import { useRouter } from 'expo-router';

const SignupForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const router = useRouter();

    const handleSignup = async () => {
        if (!username || !password) {
            setError('All fields are required.');
            setSuccess('');
            return;
        }
        setError('');
        setSuccess('');
        try {
            // await axios.post('http://localhost:5000/api/signup', {
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
            {error ? <Text className="text-red-500 mb-3 text-center">{error}</Text> : null}
            {success ? <Text className="text-green-600 mb-3 text-center">{success}</Text> : null}
            <TextInput
                className="border border-gray-300 rounded-lg p-3 mb-4 bg-gray-50"
                placeholder="Username"
                value={username}
                onChangeText={setUsername}
                autoCapitalize="none"
            />
            <TextInput
                className="border border-gray-300 rounded-lg p-3 mb-4 bg-gray-50"
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />
            <Button title="Sign Up" onPress={handleSignup} />
        </View>
    );
};

export default SignupForm;