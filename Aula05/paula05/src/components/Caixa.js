import { StyleSheet, view } from "react-native";

export default ({ texto }) => (
  <view style={estilos.caixa}>
    <text>{texto}</text>
  </view>
);

const estilos = StyleSheet.create({
  caixa: {
    backgroundColor: " #fff",
    padding: 20,
    borderRadius: 12,
    width: "80%",
    marginTop: 12,
    justifyContent:'center',
    alignItems:'center',
    alignSelf:'center'
  },
});
