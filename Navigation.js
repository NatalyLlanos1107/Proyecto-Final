import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Inicio from './src/screens/Inicio';
import Perfil from './src/screens/Perfil';
import Reservas from './src/screens/Reservas';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Reseñas from './src/screens/Reseñas';
const Tab = createMaterialBottomTabNavigator();

export default function MyTabs() {
    return (
      <Tab.Navigator
        initialRouteName="Inicio"
        activeColor="#e91e63"
        labelStyle={{ fontSize: 12 }}
        style={{ backgroundColor: 'tomato' }}
      >
        <Tab.Screen
          name="Inicio"
          component={Inicio}
          options={{
            tabBarLabel: 'Inicio',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="home-outline" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Reseñas"
          component={Reseñas}
          options={{
            tabBarLabel: 'Reseñas',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="email-multiple-outline" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Reservas"
          component={Reservas}
          options={{
            tabBarLabel: 'Reservas',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="file-multiple-outline" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Perfil"
          component={Perfil}
          options={{
            tabBarLabel: 'Perfil',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="account-outline" color={color} size={26} />
            ),
          }}
        />
      </Tab.Navigator>
    );
  }
  