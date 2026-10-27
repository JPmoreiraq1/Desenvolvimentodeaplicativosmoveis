import { createNativeStackNavigator } from "@react-navigation/native-stack";

import ListaTarefas from "../screens/ListaTarefas";
import NovaTarefa from "../screens/NovaTarefa";

const Stack = createNativeStackNavigator();

export default function AppStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#1e88e5" },
        headerTintColor: "#fff",
        headerTitleStyle: { fontWeight: "bold" },
      }}
    >
      <Stack.Screen
        name="ListaTarefas"
        component={ListaTarefas}
        options={{ title: "Lista de Tarefas" }}
      />
      <Stack.Screen
        name="NovaTarefa"
        component={NovaTarefa}
        options={{ title: "Nova Tarefa" }}
      />
    </Stack.Navigator>
  );
}