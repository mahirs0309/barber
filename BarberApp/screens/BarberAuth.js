import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const BarberAuth = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Enter your mobile number</Text>
            <TouchableOpacity style={styles.input}>
                <Text style={styles.inputText}>+1 (201) 555-0123</Text>
                <FontAwesome name="user" size={24} color="black" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.continueButton}>
                <Text style={styles.continueButtonText}>Continue</Text>
            </TouchableOpacity>
            <Text style={styles.orText}>or</Text>
            <TouchableOpacity style={styles.authButton}>
                <FontAwesome name="apple" size={24} color="black" />
                <Text style={styles.authButtonText}>Continue with Apple</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.authButton}>
                <FontAwesome name="google" size={24} color="black" />
                <Text style={styles.authButtonText}>Continue with Google</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.authButton}>
                <FontAwesome name="envelope" size={24} color="black" />
                <Text style={styles.authButtonText}>Continue with Email</Text>
            </TouchableOpacity>
            <Text style={styles.orText}>or</Text>
            <TouchableOpacity style={styles.findAccountButton}>
                <FontAwesome name="search" size={24} color="black" />
                <Text style={styles.findAccountButtonText}>Find my account</Text>
            </TouchableOpacity>
            <Text style={styles.footerText}>
                By proceeding, you consent to get calls, WhatsApp or SMS messages, including by automated dialer, from BarberHub and its affiliates to the number provided. Text "STOP" to 89203 to opt out.
            </Text>
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
    title: {
        fontSize: 20,
        color: 'black',
        marginBottom: 20,
    },
    input: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 10,
        width: '80%',
        marginBottom: 20,
    },
    inputText: {
        flex: 1,
        color: 'black',
    },
    continueButton: {
        backgroundColor: 'black',
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderRadius: 10,
        width: '80%',
        alignItems: 'center',
        marginBottom: 20,
    },
    continueButtonText: {
        color: 'white',
        fontSize: 16,
    },
    orText: {
        color: 'white',
        marginVertical: 10,
    },
    authButton: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
        paddingVertical: 15,
        paddingHorizontal: 20,
        borderRadius: 10,
        width: '80%',
        marginBottom: 10,
    },
    authButtonText: {
        color: 'black',
        marginLeft: 10,
        fontSize: 16,
    },
    findAccountButton: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 15,
        paddingHorizontal: 20,
        borderRadius: 10,
        width: '80%',
        marginBottom: 20,
    },
    findAccountButtonText: {
        color: 'black',
        marginLeft: 10,
        fontSize: 16,
    },
    footerText: {
        color: 'white',
        fontSize: 12,
        textAlign: 'center',
        marginTop: 20,
        paddingHorizontal: 20,
    },
});

export default BarberAuth;
