import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Sobre from "./src/pages/Sobre";
import Home from "./src/pages/Home";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerStyle: {backgroundColor:'#21295C'},
        headerTintColor:"#fff",
        headerTitleStyle: {fontWeight:'bold'}
      }}>
        <Stack.Screen
          name="TelaHome"
          component={Home}
          options={{ title: "Principal" }}
        />

        <Stack.Screen
          name="TelaSobre"
          component={Sobre}
          options={{ title: "PaginaSobre", headerShown:false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
