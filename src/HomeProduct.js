import React from "react";
import { Text, Image, StyleSheet, View } from "react-native";

const HomeProduct = ({ route }) => {

    const { title='não conseguiu achar o item', products='não conseguiu achar o item' } = route.params || {}

    return (
        <View style={styles.container}>
            <Text>{title}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColors: '#fff', 
    },
});

export default HomeProduct;