import React from "react";
import { StyleSheet } from "react-native";
import { Text, View } from "./Themed";

export default function WelcomeText({ name }: { name: string }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{name} </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    marginBottom: 5,
  },
  text: {
    fontSize: 26,
    marginRight: "auto",
    marginLeft: "auto"
  },
});
