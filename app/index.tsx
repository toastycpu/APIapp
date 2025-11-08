import React, { useState, useEffect } from "react";
import { View, Text, FlatList, ActivityIndicator, StyleSheet } from "react-native";

export default function CharactersScreen() {
  const [characters, setCharacters] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);


  const fetchCharactersData = async () => {
    try {
      const response = await fetch("https://wizard-world-api.herokuapp.com/Characters");
      const data = await response.json();
      console.log("Characters:", data.length);
      setCharacters(data.slice(0, 30));
    } catch (error) {
      console.error("Error fetching characters:", error);
    } finally {
      setLoading(false);
    }
  };


  useEffect(() => {
    fetchCharactersData();
  }, []);

  if (loading) {
    // Loading indicator
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#6c5ce7" />
        <Text style={styles.loadingText}>Loading Hogwarts characters...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={characters}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.name}>{item.firstName} {item.lastName}</Text>
            <Text style={styles.house}>{item.house || "No House"}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: "#26085bff", padding: 10 },
  loadingContainer: {flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#fff" },
  loadingText: {marginTop: 10, fontSize: 16, color: "#555" },
  card: {
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 10,
    marginBottom: 10,
    elevation: 2,
  },
  name: {fontSize: 18, fontWeight: "bold", color: "#2d3436" },
  house: {fontSize: 14, color: "#4e6871ff" },
});

