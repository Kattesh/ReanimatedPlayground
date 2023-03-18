import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {useSearchParams} from "expo-router/src/LocationProvider";
import cities from "../data/cities";
import {Ionicons} from '@expo/vector-icons';
import {useRouter} from "expo-router/src/link/useRouter";

const CityDetails = () => {
    const {id} = useSearchParams()
    const router = useRouter()

    const city = cities.find(c => c.id === id)

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
                <Ionicons name="chevron-back-outline" size={32} color="white"/>
            </TouchableOpacity>
            <Image style={styles.image} source={{uri: city.imageUri}}/>
            <View style={styles.detailsContainer}>
                <Text style={styles.name}>{city.name}</Text>
                <Text style={styles.description}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nec erat massa. Proin ac lobortis
                    mauris. Duis vel suscipit nisi. Suspendisse vitae volutpat est. In hac habitasse platea dictumst.
                    Aenean sit amet mauris id dolor bibendum egestas non eu dolor. Nam scelerisque lacus eu augue
                    hendrerit, ac malesuada nunc pellentesque. Vestibulum varius libero et augue accumsan, vitae feugiat
                    arcu elementum. Nulla facilisi. Sed quis tellus a lectus vehicula ultricies ac vel turpis. Nam eget
                    ullamcorper erat. Sed eget dolor mi. Proin suscipit purus at ex suscipit viverra. Sed ac purus elit.
                </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    backButton: {
        position: 'absolute',
        top: 40,
        left: 20,
        zIndex: 1,
    },
    image: {
        width: '100%',
        height: 200,
    },
    detailsContainer: {
        margin: 20,
    },
    name: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    description: {
        fontSize: 16,
    },
});
export default CityDetails
