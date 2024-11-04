import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Linking } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Contact = () => {
    const openWhatsApp = () => {
        Linking.openURL('https://wa.me/5511999228409');
    };

    const openGitHub = () => {
        Linking.openURL('https://github.com/MatheusRodrigues10');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.description}>
                Se você tiver dúvidas ou sugestões, sinta-se à vontade para entrar em contato comigo.
                Estou sempre aberto a feedbacks e pronto para ajudar.
            </Text>
            <TouchableOpacity style={styles.contactItem} onPress={openWhatsApp}>
                <Ionicons name="logo-whatsapp" size={24} color="#25D366" />
                <Text style={styles.contactText}>WhatsApp</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.contactItem} onPress={openGitHub}>
                <Ionicons name="logo-github" size={24} color="#333" />
                <Text style={styles.contactText}>GitHub</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
    },
    contactItem: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15,
        borderRadius: 10,
        backgroundColor: '#f0f0f0',
        marginVertical: 10,
    },
    contactText: {
        marginLeft: 10,
        fontSize: 18,
    },
    description: {
        fontSize: 15,
        lineHeight: 24,
        color: '#333',
    },
});

export default Contact;
