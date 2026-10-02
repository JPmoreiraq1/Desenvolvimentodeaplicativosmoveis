import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TelaReceitas from "../pages/TelaReceitas";
import TelaPerfil from "../pages/TelaPerfil";
import TelaFavoritas from "../pages/TelaFavoritas";
import { Ionicons } from "@expo/vector-icons";

import cores from "../theme/colors";

const Tabs = createBottomTabNavigator();

const ICONES_POR_ABA = {
  ReceitasTab: { ativo: "restaurant", inativo: "restaurant-outline" },
  FavoritasTab: { ativo: "heart", inativo: "heart-outline" },
  PerfilTab: { ativo: "person", inativo: "person-outline" },
};

export default function MainTabs() {
  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: cores.laranja,
        tabBarStyle: { height: 60 },

        tabBarIcon: ({ focused, size, color }) => {
          const icones = ICONES_POR_ABA[route.name];

          const nomeIcone = focused ? icones.ativo : icones.inativo;

          return <Ionicons name={nomeIcone} size={size} color={focused ? cores.laranja : cores.cinza} />;
        },
      })}
    >
      <Tabs.Screen
        component={TelaReceitas}
        name="ReceitasTab"
        options={{ title: "Receitas" }}
      />

      <Tabs.Screen
        component={TelaPerfil}
        name="PerfilTab"
        options={{ title: "Perfil" }}
      />

      <Tabs.Screen
        component={TelaFavoritas}
        name="FavoritasTab"
        options={{ title: "Favoritas" }}
      />
    </Tabs.Navigator>
  );
}
