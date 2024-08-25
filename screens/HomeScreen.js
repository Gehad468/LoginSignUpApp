import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TextInput, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomButton from '../components/CustomButton';

const HomeScreen = () => {
    const [searchText, setSearchText] = useState('');
    const [data, setData] = useState([
        { id: '1', name: 'Rose Red', description: 'A beautiful Rose red', image: require('../assets/Images/22.jpg') },
        { id: '2', name: 'Tulip', description: 'A vibrant tulip', image: require('../assets/Images/3.jpg') },
        { id: '3', name: 'Sunflower', description: 'A bright sunflower', image: require('../assets/Images/sunFlower.jpg') },
        { id: '4', name: 'Daisy', description: 'A delicate daisy', image: require('../assets/Images/44.jpg') },
        { id: '5', name: 'Orchid', description: 'An exotic orchid', image: require('../assets/Images/55.jpg') },
        { id: '6', name: 'Lavender', description: 'A soothing lavender', image: require('../assets/Images/images.jpg') },
    ]);

    const filteredData = data.filter(item =>
        item.name.toLowerCase().includes(searchText.toLowerCase())
    );

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#161622' }}>
            <View style={styles.headerContainer}>
                <Image source={require('../assets/Images/122.png')} style={styles.bannerImage} resizeMode="contain" />
                <Text style={styles.headerTitle}>Flower Gallery</Text>
            </View>

            <View style={styles.searchContainer}>
                <TextInput
                    style={styles.searchInput}
                    placeholder="Search for flowers..."
                    value={searchText}
                    onChangeText={(text) => setSearchText(text)}
                    placeholderTextColor="#888"
                />
            </View>

            <FlatList
                data={filteredData}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={styles.itemContainer}>
                        <Image source={item.image} style={styles.itemImage} />
                        <Text style={styles.itemName}>{item.name}</Text>
                        <Text style={styles.itemDescription}>{item.description}</Text>
                    </View>
                )}
                contentContainerStyle={styles.listContainer}
            />

            <CustomButton
                title="Explore More"
                handlePress={() => alert('There is no more')}
                style={styles.exploreButton}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    headerContainer: {
        alignItems: 'center',
        marginBottom: 20,
    },
    bannerImage: {
        width: '100%',
        height: 250,
    },
    headerTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fff',
        marginTop: -40,
        backgroundColor: 'rgba(	22,22,34,0.6)',
        paddingVertical: 5,
        paddingHorizontal: 15,
        borderRadius: 10,
    },
    searchContainer: {
        paddingHorizontal: 20,
        marginBottom: 20,
    },
    searchInput: {
        height: 40,
        borderColor: '#e0b78d',
        borderWidth: 1,
        borderRadius: 10,
        paddingLeft: 10,
        backgroundColor: '#2d2d38',
    },
    listContainer: {
        paddingHorizontal: 20,
    },
    itemContainer: {
        marginBottom: 20,
        backgroundColor: '#2d2d38',
        borderRadius: 10,
        padding: 15,
        alignItems: 'center',
        shadowColor: '#fff',
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 4,
        elevation: 2,
    },
    itemImage: {
        width: 100,
        height: 100,
        borderRadius: 10,
        marginBottom: 10,
    },
    itemName: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#e0b78d',
        marginBottom: 5,
    },
    itemDescription: {
        fontSize: 14,
        color: '#fff',
        textAlign: 'center',
    },
    exploreButton: {
        marginBottom: 20,
        marginHorizontal: 20,
        backgroundColor: '#e0b78d',
        borderRadius: 10,
        paddingVertical: 10,
    },
});

export default HomeScreen;
