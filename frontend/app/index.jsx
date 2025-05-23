import SignupForm from '../components/SignupForm';
import { View, Text, StyleSheet } from 'react-native';

const Signup = () => {
    return (
        <View style={styles.container}>
            <View style={styles.formContainer}>
                <Text style={styles.title}>Sign Up</Text>
                <SignupForm />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f3f4f6',
        justifyContent: 'center',
        alignItems: 'center',
    },
    formContainer: {
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
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 24,
        textAlign: 'center',
    },
});

export default Signup;