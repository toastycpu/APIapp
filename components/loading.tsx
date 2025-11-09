import React from "react";
import { View, Text, ActivityIndicator, StyleSheet } from "react-native";

interface LoadingScreenProps {
  message?: string;
  backgroundColor?: string;
  spinnerColor?: string;
}

export default function LoadingScreen({
  message = "Loading...",
  backgroundColor = "#400101ff",
  spinnerColor = "#e5e75cff",
}: LoadingScreenProps) {
  return (
    <View style={[styles.container, { backgroundColor }]}>
      <ActivityIndicator size="large" color={spinnerColor} />
      <Text style={styles.loadingText}>{message}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  loadingText: {
    marginTop: 10,
    fontSize: 19,
    color: "#ecdfcdff",
  },
});

