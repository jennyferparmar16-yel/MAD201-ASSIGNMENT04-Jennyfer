/*
Name: Jennyfer Parmar
Student ID: A00201240
Date: 23/11/25
File: app/index.tsx
Description:
  Home screen showing profile image, name, bio, and buttons
  for navigating to the Projects and Contact screens.
*/

import { Link } from "expo-router";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      {/* Profile picture */}
      <Image
        style={styles.profile}
        source={{ uri: "https://via.placeholder.com/150" }}
      />

      {/* Display name */}
      <Text style={styles.name}>Your Name</Text>

      {/* Short bio */}
      <Text style={styles.bio}>
        I am a mobile app developer passionate about building cross-platform apps.
      </Text>

      {/* Navigate to Projects screen */}
      <Link href="/projects" asChild>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>View My Projects</Text>
        </TouchableOpacity>
      </Link>

      {/* Navigate to Contact screen */}
      <Link href="/contact" asChild>
        <TouchableOpacity style={[styles.button, { backgroundColor: "#4CAF50" }]}>
          <Text style={styles.buttonText}>Contact Me</Text>
        </TouchableOpacity>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center", padding: 20 },
  profile: { width: 150, height: 150, borderRadius: 100, marginBottom: 20 },
  name: { fontSize: 26, fontWeight: "bold" },
  bio: { textAlign: "center", marginVertical: 10, fontSize: 15 },
  button: {
    backgroundColor: "#2196F3",
    padding: 12,
    borderRadius: 8,
    marginTop: 10,
    width: 200,
    alignItems: "center",
  },
  buttonText: { color: "#FFF", fontWeight: "bold" },
});
