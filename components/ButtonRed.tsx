import React from "react";
import { StyleSheet, ActivityIndicator } from "react-native";
import { primary, secondary } from "../constants/Colors";
import Pressable from "./Pressable";
import { Text, View } from "./Themed";

export default function Button({
  text,
  onPress,
  disabled,
}: {
  text: string;
  onPress: () => void;
  disabled: boolean;
}) {
  return (
    <Pressable onPress={onPress} disabled={disabled}>
      <View
        style={[
          styles.container,
        ]}
      >
        <Text style={styles.text}>
          {!disabled ? text : <ActivityIndicator size="small" color="#fff" />}
        </Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 12,
    paddingHorizontal: 10,
    marginTop: 20,
    borderRadius: 7,
    backgroundColor: "red",
    alignItems: "center",
    width: "100%",
  },
  text: {
    color: "#fff",
    fontSize: 18,
  },
});
