import React from "react";
import { Text, Image, StyleSheet, View, Button } from "react-native";
import HomeList from "./HomeList";

const Home = () => {
    return (
        <View style={styles.container}>
            <HomeList />
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: '#fff', 
    },
});


export default Home;