import React from "react";
import { Text, Image, StyleSheet, View, FlatList } from "react-native";
import { plates } from "../data/plates";

const HomeList = () => {

    const renderItem = ({ item }) => (
        <View>
            <Text>{item.title}</Text>
        </View>
    )



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
        marginTop: 50
    }
})

export default HomeList;