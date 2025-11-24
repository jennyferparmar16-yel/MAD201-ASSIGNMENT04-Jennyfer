import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function ContactScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Contact Me</Text>

      <View style={styles.contactRow}>
        <TouchableOpacity>
          <Text style={styles.link}>LinkedIn</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={styles.link}>GitHub</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.emailButton}>
        <Text style={styles.emailText}>Email Me</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  heading: { fontSize: 26, fontWeight: "bold", marginBottom: 20 },
  contactRow: {
    flexDirection: "row",
    marginBottom: 20,
  },
  link: {
    marginHorizontal: 15,
    fontSize: 18,
    color: "#2196F3",
  },
  emailButton: {
    backgroundColor: "#4CAF50",
    padding: 12,
    borderRadius: 8,
  },
  emailText: {
    color: "#FFF",
    fontWeight: "bold",
  },
});
