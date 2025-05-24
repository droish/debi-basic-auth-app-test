import React from 'react';
import { SafeAreaView, View, Text, TouchableOpacity } from 'react-native';
import { Link, Slot } from 'expo-router';
import '../global.css';

const tabs = [
  { label: 'Sign Up', href: '/' },
  { label: 'Remove User', href: '/removeUser' },
];

export default function RootLayout() {
  return (
    <SafeAreaView className="flex-1 bg-white">
      {/* Top navigation bar with margin from the top */}
      <View className="mt-8 h-16 flex-row justify-around items-center border-b border-gray-200 bg-white">
        {tabs.map(tab => (
          <Link key={tab.href} href={tab.href} asChild>
            <TouchableOpacity className="flex-1 items-center">
              <Text className="text-base font-semibold text-gray-700">{tab.label}</Text>
            </TouchableOpacity>
          </Link>
        ))}
      </View>
      {/* Page content */}
      <View className="flex-1">
        <Slot />
      </View>
    </SafeAreaView>
  );
}