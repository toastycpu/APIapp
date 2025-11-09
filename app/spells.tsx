import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import useSpellsData from "../hooks/useSpellsData";
import SpellCard from "../components/spellCard";
import LoadingScreen from "../components/loading";

export default function SpellsScreen() {
  const { data, loading, error } = useSpellsData();

  if (loading) {
    return (
      <LoadingScreen
        message="✨ Summoning spells..."
        backgroundColor="#400101ff"
        spinnerColor="#e5e75cff"
      />
    );
  }

  if (error) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>Failed to load spells: {error}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>✨ Spells ✨</Text>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <SpellCard spell={item} />}
        numColumns={2}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1A1F3B",
    paddingHorizontal: 12,
    paddingTop: 20,
  },
  headerText: {
    fontSize: 22,
    fontWeight: "700",
    textAlign: "center",
    color: "#d1a54f",
    paddingTop: 60,
    marginBottom: 20,
    textShadowColor: "#ffaa32ff",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
  },
  listContainer: {
    paddingBottom: 40,
    justifyContent: "center",
  },
  errorContainer: { 
    flex: 1, 
    justifyContent: "center", 
    alignItems: "center" },
  errorText: { 
    color: "#B00020", 
    fontSize: 16 },
});