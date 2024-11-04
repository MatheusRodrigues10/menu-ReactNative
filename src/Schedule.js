import React from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";
import { dailyMenu } from "../data/dailyMenu";

const Schedule = () => {
    const renderDish = ({ item }) => (
        <View style={styles.dishContainer}>
            <Text style={styles.dishType}>{item.type}:</Text>
            <View style={styles.dishDetails}>
                <Text style={styles.dishName}>{item.name}</Text>
                <Text style={styles.price}>{item.price}</Text>
            </View>
        </View>
    );

    const renderDay = ({ item }) => (
        <View style={styles.dayContainer}>
            <Text style={styles.day}>{item.day}</Text>
            <FlatList
                data={item.dishes}
                renderItem={renderDish}
                keyExtractor={dish => dish.name}
            />
        </View>
    );

    return (
        <View style={styles.container}>
            <FlatList
                data={dailyMenu}
                renderItem={renderDay}
                keyExtractor={day => day.day}
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
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 20,
    },
    dayContainer: {
        marginBottom: 15,
    },
    day: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 10,
    },
    dishContainer: {
        flexDirection: 'column',
        paddingVertical: 5,
    },
    dishType: {
        fontWeight: 'bold',
        color: '#30D5C8',
    },
    dishDetails: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap', 
    },
    dishName: {
        fontSize: 16,
        color: '#555',
        flex: 1,
    },
    price: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'green',
        marginLeft: 5,
    },
});

export default Schedule;
