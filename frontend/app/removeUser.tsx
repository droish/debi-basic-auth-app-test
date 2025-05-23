import React from 'react';
import { View, Text, Button } from 'react-native';

const RemoveUser = () => {
    const handleRemove = () => {
        // Add your remove user logic here
        alert('User removed!');
    };

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#f3f4f6' }}>
            <View style={{
                backgroundColor: '#fff',
                padding: 32,
                borderRadius: 16,
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.1,
                shadowRadius: 8,
                elevation: 4,
                width: '90%',
                maxWidth: 400,
            }}>
                <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 24, textAlign: 'center' }}>
                    Remove User
                </Text>
                <Button title="Remove User" color="#ef4444" onPress={handleRemove} />
            </View>
        </View>
    );
};

export default RemoveUser;