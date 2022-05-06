import "react-native-gesture-handler";

import Widget from "./src/components/Widget";
import { StatusBar } from "expo-status-bar";

export default function App() {
  return (
    <>
      <StatusBar style="light" backgroundColor="transparent" translucent />
      <Widget />
    </>
  );
}
