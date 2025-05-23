import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export default function RemoveUser() {
  const handleRemove = () => alert('User removed!');

  return (
    <View className="flex-1 bg-gray-100 justify-center items-center">
      <View className="bg-white p-8 rounded-2xl shadow-md w-[90%] max-w-[400px]">
        <Text className="text-xl font-bold mb-6 text-center">
          Remove User
        </Text>
        <TouchableOpacity
          onPress={handleRemove}
          className="bg-red-500 w-full py-3 rounded-md"
        >
          <Text className="text-white font-bold text-center">
            Remove User
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
