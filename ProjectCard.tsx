/*
Name: Jennyfer Parmar
Student ID: A00201240
Date: 23/11/25
File: components/ui/ProjectCard.tsx
Description:
  A reusable UI component that displays a custom card layout
  for individual projects. Includes project title, description,
  and a styled button placeholder.
*/

import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

// Props expected by the ProjectCard component
type ProjectCardProps = {
  title: string;
  description: string;
};

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description }) => {
  return (
    <View style={styles.card}>
      {/* Project Title */}
      <Text style={styles.title}>{title}</Text>

      {/* Project Description */}
      <Text style={styles.description}>{description}</Text>

      {/* Learn More button (placeholder functionality) */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Learn More</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProjectCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#FFF",
    padding: 20,
    marginVertical: 10,
    borderRadius: 10,
    elevation: 3,
    width: "90%",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  description: {
    marginVertical: 8,
    color: "#555",
  },
  button: {
    marginTop: 10,
    padding: 10,
    backgroundColor: "#2196F3",
    borderRadius: 6,
    width: 120,
    alignItems: "center",
  },
  buttonText: {
    color: "#FFF",
    fontWeight: "bold",
  },
});
