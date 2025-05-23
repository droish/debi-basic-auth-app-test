import React from 'react';
import { Tabs } from 'expo-router';
import '../global.css';

export default function RootLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#2563eb', // blue-600
        tabBarInactiveTintColor: '#6b7280', // gray-500
        tabBarStyle: {
          // NativeWind classes do not apply here, so use style object
          backgroundColor: '#fff',
          borderTopWidth: 1,
          borderTopColor: '#e5e7eb', // gray-200
          height: 60,
          paddingBottom: 8,
        },
        tabBarLabelStyle: {
          fontSize: 14,
          fontWeight: '600',
        },
        headerShown: false,
      }}
    />
  );
}