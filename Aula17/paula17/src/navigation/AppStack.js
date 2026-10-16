//Importando o navegação Stack
import {createNativeStackNavigator} from '@react-navigation/native-stack';

//Importando as telas
import ListaTarefaScreen from '../screens/ListaTarefaScreen';
import NovaTarefaScreen from '../screens/NovaTarefaScreen';

//Instanciando uma navegação do tipo Stack
const Stack = createNativeStackNavigator();

export default function AppStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen component={ListaTarefaScreen} name="Tarefas" options={{title: "Minhas Tarefas"}}/>
        </Stack.Navigator>
    )
}