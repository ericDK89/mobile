import React, { useRef } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { gestureHandlerRootHOC } from "react-native-gesture-handler";

import { Options } from "../Options";
import { Form } from "../Form";

import BottomSheet from "@gorhom/bottom-sheet";

import { ChatTeardropDots } from "phosphor-react-native";

import AppLoading from "expo-app-loading";
import { styles } from "./styles";

import {
  useFonts,
  Inter_400Regular,
  Inter_500Medium,
} from "@expo-google-fonts/inter";

import { theme } from "../../theme";
import { feedbackTypes } from "../../utils/feedbackTypes";

export type FeedbackType = keyof typeof feedbackTypes;

function Widget() {
  const bottomSheetRef = useRef<BottomSheet>(null);

  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
  });

  if (!fontsLoaded) {
    <AppLoading />;
  }

  function handleOpening() {
    bottomSheetRef.current?.expand();
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Será</Text>
      <TouchableOpacity style={styles.btn} onPress={handleOpening}>
        <ChatTeardropDots size={24} color={theme.colors.text_on_brand_color} />
      </TouchableOpacity>

      <BottomSheet
        ref={bottomSheetRef}
        snapPoints={[1, 280]}
        backgroundStyle={styles.modal}
        handleIndicatorStyle={styles.indicator}
      >
        <Form feedbackType="BUG"/>
      </BottomSheet>
    </View>
  );
}

export default gestureHandlerRootHOC(Widget);
