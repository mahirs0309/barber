import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const BookingConfirmationScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Booking confirmed!</Text>
      <Text style={styles.subtitle}>We've sent a confirmation to your email address.</Text>
      <View style={styles.details}>
        <Text>Barber: Barber Anxiety</Text>
        <Text>Booking location: Home, Canary Wharf</Text>
        <Text>Customers: 1 Customer</Text>
        <Text>Date: Tuesday 26 July 2022</Text>
        <Text>Time: 10:10am</Text>
      </View>
      <Button title="Add to Calendar" onPress={() => {}} />
      <Button title="Dismiss" onPress={() => navigation.navigate('Home')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: 'center', alignItems: 'center', backgroundColor: '#2c3e50' },
  title: { fontSize: 24, fontWeight: 'bold', color: '#1abc9c' },
  subtitle: { fontSize: 16, color: '#ecf0f1', marginVertical: 10 },
  details: { marginVertical: 20 },
});

export default BookingConfirmationScreen;
