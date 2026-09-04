import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Alex Nunes</Text>

      <View style={styles.overlay}>
        <Text>Saldo</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    textAlign:'left',
    backgroundColor: "purple",
    alignSelf: 'flex-start',
    height: 150
  },
  overlay: {
  
    backgroundColor: "white",
    alignSelf: 'center',
width:500,
height:500
  },
});