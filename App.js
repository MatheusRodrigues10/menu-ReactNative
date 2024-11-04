import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import Home from './src/Home';
import Contact from './src/Contact';
import About from './src/About';
import Schedule from './src/Schedule';
import HomeList from './src/HomeList';
import HomeProduct from './src/HomeProduct';


const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function HomeStack(){
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="Home" 
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen 
        name="HomeList" 
        component={HomeList}
        options={{ headerShown: false }}
      />
      <Stack.Screen 
        name="HomeProduct" 
        component={HomeProduct}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};



export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Tab.Navigator
        screenOptions={{
          headerTitleAlign: 'center',
          tabBarActiveTintColor: '#30D5C8'
        }}>
        <Tab.Screen 
          name="Restaurante"
          component={HomeStack}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name='home-outline' color={color} size={size}/>
            )
          }} />
             <Tab.Screen 
          name="Horários"
          component={Schedule}
          options={{
            tabBarLabel: 'Horários',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name='time-outline' color={color} size={size}/>
            )
          }} />
             <Tab.Screen 
          name="Contato"
          component={Contact}
          options={{
            tabBarLabel: 'Contato',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name='call-outline' color={color} size={size}/>
            )
          }} />
             <Tab.Screen 
          name="Sobre"
          component={About}
          options={{
            tabBarLabel: 'Sobre',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name='information-circle-outline' color={color} size={size}/>
            )
          }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
