import { createNativeStackNavigator } from "@react-navigation/native-stack"

const Stack = createNativeStackNavigator();
import NovaTarefa from "../screens/NovaTarefa";
import ListaTarefas from "../screens/ListaTarefas";

export default function AppStack(){
    return(
        <Stack.Navigator>
            <Stack.Screen name="ListaTarefas" component={ListaTarefas}/>
            <Stack.Screen name="NovaTarefa" component={NovaTarefa}/>
        </Stack.Navigator>
    )
}