import React from 'react';
import { View } from 'react-native';
import RemoveUserForm from '../components/RemoveUserForm';

export default function RemoveUser() {
  return (
    <View className="flex-1 bg-gray-100 justify-center items-center p-4">
      <RemoveUserForm />
    </View>
  );
}
