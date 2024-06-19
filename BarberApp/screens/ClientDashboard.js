import React from 'react';
import { View, Text, StyleSheet, TextInput, FlatList, TouchableOpacity } from 'react-native';

const mockData = [
    {
        id: '1',
        name: 'John Doe',
        rating: 4.5,
        services: ['Haircut', 'Shave'],
        price: '$30',
    },
    {
        id: '2',
        name: 'Jane Smith',
        rating: 4.0,
        services: ['Haircut', 'Beard Trim'],
        price: '$25',
    },
];

const ClientDashboard = () => {
    return (
        <View style={styles.container}>
            <TextInput
                style={styles.searchBar}
                placeholder="Search for barbers..."
            />
            <FlatList
                data={mockData}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={styles.barberCard}>
                        <Text style={styles.barberName}>{item.name}</Text>
                        <Text style={styles.barberRating}>Rating: {item.rating}</Text>
                        <Text style={styles.barberServices}>Services: {item.services.join(', ')}</Text>
                        <Text style={styles.barberPrice}>Price: {item.price}</Text>
                        <TouchableOpacity style={styles.bookButton}>
                            <Text style={styles.bookButtonText}>Book Now</Text>
                        </TouchableOpacity>
                    </View>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#00C4B4',
    },
    searchBar: {
        backgroundColor: '#ffffff',
        padding: 10,
        borderRadius: 10,
        marginBottom: 20,
    },
    barberCard: {
        backgroundColor: '#ffffff',
        padding: 20,
        borderRadius: 10,
        marginBottom: 20,
    },
    barberName: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    barberRating: {
        fontSize: 16,
    },
    barberServices: {
        fontSize: 14,
    },
    barberPrice: {
        fontSize: 14,
    },
    bookButton: {
        backgroundColor: '#008080',
        padding: 10,
        borderRadius: 10,
        marginTop: 10,
        alignItems: 'center',
    },
    bookButtonText: {
        color: '#ffffff',
        fontSize: 16,
    },
});

export default ClientDashboard;
