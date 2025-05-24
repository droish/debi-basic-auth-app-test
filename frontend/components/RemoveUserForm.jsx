import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import axios from 'axios';

export default function RemoveUserForm() {
  const [username, setUsername] = useState('');
  const [message, setMessage] = useState('');

  const handleRemove = async () => {
    if (!username) {
      setMessage('Please enter a username.');
      return;
    }
    setMessage('');
    try {
      // TODO: switch to HTTPS and real server URL
      await axios.delete(`http://192.168.1.173:5000/users/${username}`);
      setMessage('User removed!');
      setUsername('');
    } catch (err) {
      setMessage(err.response?.data?.message || 'Failed to remove user.');
    }
  };

  return (
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

      <Button
        title="Remove User"
        color="#ef4444"
        onPress={handleRemove}
      />

      {message ? (
        <Text className="mt-4 text-center text-gray-700">
          {message}
        </Text>
      ) : null}
    </View>
  );
}
