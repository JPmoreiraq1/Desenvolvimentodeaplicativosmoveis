import{createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function RootNavigator({ navigation }) {
    return(
        <Stack.Navigator id='RootStack'>
            
        </Stack.Navigator>
    )
}