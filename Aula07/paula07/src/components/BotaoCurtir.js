import { Button } from "react-native";


export default function BotaoCurtir({nomePost, aoPressionar}){
    return(
        <Button
            title="Curtir"
            color="red"
            onPress={() => aoPressionar(nomePost)}
        />
    )
}