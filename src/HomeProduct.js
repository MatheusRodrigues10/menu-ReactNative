import React from "react";
import { Text, Image, StyleSheet, View, FlatList } from "react-native";

const HomeProduct = ({ route }) => {

    const { title= 'não conseguiu achar o item', products = [] } = route.params || {}

    const renderItem = ({ item }) => (
        <View style={styles.productItem}>
            <Image source={{uri: item.img}} style={styles.productImg}/>
            <View style={styles.productDescription}>
                <Text style={styles.productName}>{item.name}</Text>
                <Text style={styles.productPrice}>{item.price}</Text>
            </View>
        </View>
    );

    return (
        <View style={styles.container}>
            <FlatList
                data={products}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: '#fff',
    },
    productItem: {
        height: 120,
        margin: 10,
        borderRadius: 10,
        padding: 10,
        flex: 1,
        flexDirection: 'row'
    },
    productImg: {
        height: 100,
        width: 115,
        borderRadius: 10
    },
    productName: {
        flex: 1,
        fontSize: 15,
        fontWeight: 'bold',
        marginLeft: 15,
        flexWrap: 'wrap'
    },
    productPrice: {
        flex: 1,
        marginLeft: 15,
        color: 'green',
        fontWeight: 'bold'
    },
    productDescription: {
        flex: 1,
        flexDirection: 'column'
    }
});

export default HomeProduct;