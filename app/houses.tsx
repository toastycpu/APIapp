import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import HouseCard from "../components/houseCard";
import useHousesData from "@/hooks/useHouseData";
import LoadingScreen from "../components/loading";

export default function HousesScreen() {
  const { data: houses, loading } = useHousesData();

  if (loading) {
    return (
      <LoadingScreen
        message="🪄 Loading Hogwarts houses..."
        backgroundColor="#400101ff"
        spinnerColor="#e5e75cff"
      />
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>✨ Hogwarts Houses ✨</Text>
      <FlatList
        data={houses}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <HouseCard house={item} />}
        contentContainerStyle={{ paddingBottom: 30 }}
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
});
