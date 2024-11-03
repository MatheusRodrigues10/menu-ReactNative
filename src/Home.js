import React from "react";
import { View, StyleSheet } from "react-native";
import HomeList from "./HomeList";

const Home = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <HomeList navigation={navigation} /> 
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
