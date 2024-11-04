// src/About.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const About = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.description}>
                Olá! Me chamo Matheus e este aplicativo foi criado como um layout de código aberto, permitindo que você o utilize livremente como base para seu próprio projeto.
                Sinta-se à vontade para personalizar e adaptar conforme suas necessidades.
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
    },
    description: {
        fontSize: 16,
        lineHeight: 24,
        color: '#333',
    },
});

export default About;
