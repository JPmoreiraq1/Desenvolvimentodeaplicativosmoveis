import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";

import RootDrawer from "./src/routes/RootDrawer";


export default function App() {
  return(
    <SafeAreaProvider>
      <NavigationContainer>
        <RootDrawer />
      </NavigationContainer>
    </SafeAreaProvider>
  )

}
