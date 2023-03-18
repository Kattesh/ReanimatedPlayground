import {FlatList, Image, Pressable, StyleSheet, Text, View} from "react-native";
import cities from "../data/cities";
import {Link} from "expo-router/src/link/Link";


const CityGrid = () => {
    return (
        <FlatList
            data={cities}
            numColumns={2}
            renderItem={({item}) => (
                <Link href={item.id} asChild>
                    <Pressable style={styles.city}>
                        <Image style={styles.image} source={{uri: item.imageUri}}/>
                        <Text style={styles.name}>{item.name}</Text>
                    </Pressable>
                </Link>
            )}
            keyExtractor={(item) => item.name}

        />

    );
}


const styles = StyleSheet.create({
    container: {
        padding: 16,
        backgroundColor: '#F5F5F5'
    },
    city: {
        flex: 1,
        flexDirection: 'column',
        margin: 5,
        backgroundColor: '#fff',
        borderRadius: 5,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    image: {
        width: '100%',
        height: 150,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold',
        margin: 10,
        textAlign: 'center',
    },
});

export default CityGrid

