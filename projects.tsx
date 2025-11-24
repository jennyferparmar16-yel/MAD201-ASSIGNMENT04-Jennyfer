/*
Name: Jennyfer Parmar
Student ID: A00201240
Date: 23/11/25
File: app/projects.tsx
Description:
  This screen displays a scrollable list of project cards.
  It imports and uses the reusable ProjectCard component
  to show details for each individual project.

*/

import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import ProjectCard from "../components/ui/ProjectCard";

export default function ProjectsScreen() {
  // List of projects displayed in the UI
  const projects = [
    { id: 1, title: "Weather App", description: "Shows current weather using an API" },
    { id: 2, title: "ToDo App", description: "Task manager with local storage" },
    { id: 3, title: "Calculator", description: "Basic calculator app" },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Render a ProjectCard for each project */}
      {projects.map((p) => (
        <ProjectCard
          key={p.id}
          title={p.title}
          description={p.description}
        />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    alignItems: "center",
  },
});
