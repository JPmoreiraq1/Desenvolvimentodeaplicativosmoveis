import { createDrawerNavigator } from "@react-navigation/drawer";
import MainTabs from "./MainTabs";
import TelaSobre from "../pages/TelaFavoritas";
import { Ionicons } from "@expo/vector-icons";

import cores from "../theme/colors";

const Drawer = createDrawerNavigator();

export default function RootDrawer() {
  return (
    <Drawer.Navigator
      id="RootDrawer"
      screenOptions={{
        headerStyle: { backgroundColor: cores.laranja },
        headerTintColor: cores.branco,
        headerTitleStyle: { fontWeight: "bold" },
        drawerActiveTintColor: cores.laranja,
      }}
    >
      {/* Tela Sabor Caseiro e Tela Sobre */}

      <Drawer.Screen
        component={MainTabs}
        name="Principal"
        options={{
          title: "Sabor Caseiro",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="home-outline" size={size} color={color} />
          ),
        }}
      />

      <Drawer.Screen
        component={TelaSobre}
        name="Sobre"
        options={{
          title: "Sobre",
          drawerIcon: ({ color, size }) => (
            <Ionicons
              name="information-circle-outline"
              size={size}
              color={color}
            />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}
