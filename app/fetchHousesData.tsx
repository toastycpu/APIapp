import React, { useState, useEffect } from "react";
import { View, Text, FlatList, ActivityIndicator, StyleSheet } from "react-native";

import HouseCard from "../components/houseCard"

export default function HousesScreen() {
  const [houses, setHouses] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchHousesData = async () => {
    try {
      const response = await fetch("https://wizard-world-api.herokuapp.com/Houses");
      const data = await response.json();
      console.log("Fetched Houses:", data.length);
      setHouses(data);
    } catch (error) {
      console.error("Error fetching houses:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchHousesData();
  }, []);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#6c5ce7" />
        <Text style={styles.loadingText}>Loading Hogwarts Houses...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
        <FlatList
        data={houses}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <HouseCard house={item} />}
        />
    </View>
  );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: "#26085bff", paddingHorizontal: 12, paddingTop: 70 },
    loadingContainer: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#fff" },
    loadingText: { marginTop: 10, fontSize: 16, color: "#555" },
    card: {
        backgroundColor: "#fff",
        padding: 16,
        borderRadius: 10,
        marginBottom: 10,
        elevation: 2,
    },
    name: { fontSize: 20, fontWeight: "bold", color: "#2d3436" },
    meta: { fontSize: 14, color: "#636e72", marginTop: 4 },
});
