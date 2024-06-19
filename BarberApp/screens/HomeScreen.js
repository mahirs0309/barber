import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.welcomeText}>Welcome to BarberHub!</Text>
            <Text style={styles.subText}>Sign up or login</Text>
            <TouchableOpacity 
                style={styles.button} 
                onPress={() => navigation.navigate('ClientAuth')}
            >
                <Text style={styles.buttonText}>Clients</Text>
            </TouchableOpacity>
            <TouchableOpacity 
                style={styles.button} 
                onPress={() => navigation.navigate('BarberAuth')}
            >
                <Text style={styles.buttonText}>Barbers</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#00C4B4',
        padding: 20,
    },
    welcomeText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#ffffff',
        marginBottom: 10,
    },
    subText: {
        fontSize: 16,
        color: '#ffffff',
        marginBottom: 30,
    },
    button: {
        backgroundColor: '#ffffff',
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderRadius: 30,
        marginVertical: 10,
        width: '80%',
        alignItems: 'center',
        elevation: 5,
    },
    buttonText: {
        color: '#00C4B4',
        fontSize: 18,
        fontWeight: '600',
    },
});

export default HomeScreen;
