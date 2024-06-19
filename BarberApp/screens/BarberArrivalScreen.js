import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import MapView from 'react-native-maps';

const BarberArrivalScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <MapView style={styles.map} />
      <View style={styles.details}>
        <Text style={styles.title}>Your barber has arrived.</Text>
        <Text style={styles.subtitle}>They're waiting for you at the location shown on the map.</Text>
        <View style={styles.barberInfo}>
          <Text style={styles.barberName}>Dee</Text>
          <Text style={styles.barberStudio}>Dee Cuts Studios</Text>
        </View>
        <View style={styles.actions}>
          <Button title="Message Barber" onPress={() => {}} />
          <Button title="Call Barber" onPress={() => {}} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  map: { flex: 1 },
  details: { padding: 20, backgroundColor: '#fff' },
  title: { fontSize: 18, fontWeight: 'bold' },
  subtitle: { fontSize: 14, color: '#7f8c8d' },
  barberInfo: { marginVertical: 10 },
  barberName: { fontSize: 16, fontWeight: 'bold' },
  barberStudio: { fontSize: 14, color: '#7f8c8d' },
  actions: { flexDirection: 'row', justifyContent: 'space-between' },
});

export default BarberArrivalScreen;
