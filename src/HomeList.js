import React from "react";
import { Text, Image, StyleSheet, View, FlatList, TouchableHighlight } from "react-native";
import { plates } from "../data/plates";

const HomeList = ({ navigation }) => {

    const click = ( item ) => {
        navigation.navigate('HomeProduct', {title: item.title, products: item.products})
    };

    const renderItem = ({ item }) => (
        <TouchableHighlight underlayColor='#30D5C8' onPress={() => click(item)} style={styles.listItem}>
            <View style={styles.listContent}>
                <Image source={{ uri: item.img }} style={styles.listImg} />
                <View style={styles.listDescription}>
                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={styles.description}>{item.description}</Text>
                </View>
            </View>
        </TouchableHighlight>
    );

    return (
        <View style={styles.container}>
           <FlatList 
            data={plates}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    listItem: {
        height: 100,
        flex: 1,
        justifyContent: 'center',
        padding: 10,
        marginVertical: 5,
        borderRadius: 10,
    },
    listContent: {
        flexDirection: 'row',  
        alignItems: 'center', 
    },
    listImg: {
        width: 65,
        height: 65,
        marginRight: 15,
        borderRadius: 10,
    },
    listDescription: {
        flex: 1,
        flexDirection: 'column',  
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    description: {
        fontSize: 14,
        color: '#555555',
    },
});

export default HomeList;
