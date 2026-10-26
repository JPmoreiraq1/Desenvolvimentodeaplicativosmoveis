import { createNativeStackNavigator } from "@react-navigation/native-stack";

import ListaTarefas from "../screens/ListaTarefas";
import NovaTarefa from "../screens/NovaTarefa";

const Stack = createNativeStackNavigator();

export default function AppStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="ListaTarefas" component={ListaTarefas} />
      <Stack.Screen name="NovaTarefa" component={NovaTarefa} />
    </Stack.Navigator>
  );
}