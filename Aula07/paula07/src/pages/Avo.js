import { View } from "react-native";
import Filho from "../components/Filho";


export default function Avo(){
    return(
        <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
            <Filho mensagemdo/>
        </View>
    )
}