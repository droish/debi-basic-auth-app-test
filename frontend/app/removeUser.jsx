import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import axios from 'axios';

export default function RemoveUser() {
  const [username, setUsername] = useState('');
  const [message, setMessage] = useState('');

  const handleRemove = async () => {
    if (!username) {
      setMessage('Please enter a username.');
      return;
    }
    setMessage('');
    try {
      await axios.delete(`http://localhost:5000/users/${username}`);
      setMessage('User removed!');
    } catch (err) {
      setMessage(err.response?.data?.message || 'Failed to remove user.');
    }
  };

  return (
    <View className="flex-1 bg-gray-100 justify-center items-center">
      <View className="bg-white p-8 rounded-2xl shadow-md w-[90%] max-w-[400px]">
        <Text className="text-xl font-bold mb-6 text-center">
          Remove User
        </Text>
        <TextInput
          className="border border-gray-300 rounded-lg p-3 mb-4 bg-gray-50"
          placeholder="Username"
          value={username}
          onChangeText={setUsername}
          autoCapitalize="none"
        />
        <Button title="Remove User" color="#ef4444" onPress={handleRemove} />
        {message ? (
          <Text className="mt-4 text-center">{message}</Text>
        ) : null}
      </View>
    </View>
  );
}