import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  SafeAreaView,
  TextInput,
  Text,
  View,
  Pressable,
} from "react-native";
import * as Speech from "expo-speech";

export default function App() {
  const [text, setText] = React.useState();

  const handleSpeakText = () => {
    Speech.speak(text);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <TextInput style={styles.input} onChangeText={setText} value={text} />
      <Pressable
        style={styles.button}
        onPress={handleSpeakText}
        title="Show"
        accessibilityLabel="Show"
      >
        <Text style={styles.text}>Press to hear text</Text>
      </Pressable>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
    paddingTop: 20,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: "80%",
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "#2222cc",
    marginBottom: 16,
  },
});
