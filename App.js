import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  SafeAreaView,
  FlatList,
  TextInput,
  Text,
  View,
  Pressable,
} from "react-native";
import * as Contacts from "expo-contacts";

export default function App() {
  const [contacts, setContacts] = useState([]);

  const handleGetContacts = async () => {
    const { status } = await Contacts.requestPermissionsAsync();

    if (status === "granted") {
      const { data } = await Contacts.getContactsAsync({
        fields: [Contacts.Fields.PhoneNumbers],
      });

      setContacts(data);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
            <TextInput
        style={styles.input}
        onChangeText={setKeyword}
        value={keyword}
      />
      <Pressable
        style={styles.button}
        onPress={handleGetContacts}
        title="Show"
        accessibilityLabel="Show"
      >
        <Text style={styles.text}>Get Contacts</Text>
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
