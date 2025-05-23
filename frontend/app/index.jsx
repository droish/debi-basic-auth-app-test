import React from 'react';
import { View, Text } from 'react-native';
import SignupForm from '../components/SignupForm';

export default function Signup() {
  return (
    <View className="flex-1 bg-gray-100 justify-center items-center">
      <View className="bg-white p-8 rounded-2xl shadow-md w-[90%] max-w-[400px]">
        <Text className="text-2xl font-bold mb-6 text-center">Sign Up</Text>
        <SignupForm />
      </View>
    </View>
  );
}