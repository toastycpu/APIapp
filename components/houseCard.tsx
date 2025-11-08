import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

interface House {
  id: string;
  name: string;
  founder: string;
  animal: string;
  houseColours: string;
  element: string;
  ghost: string;
  commonRoom: string;
}

interface Props {
  house: House;
}

export default function HouseCard({ house }: Props) {
  // Extract colors from the string
  const colorParts = house.houseColours?.split(" and ") || ["#ccc", "#eee"];
  const color1 = getColorHex(colorParts[0]);
  const color2 = getColorHex(colorParts[1] || colorParts[0]);

  return (
    <LinearGradient colors={[color1, color2]} style={styles.card}>
      <Text style={styles.name}>{house.name}</Text>
      <Text style={styles.meta}>Founder: {house.founder}</Text>
      <Text style={styles.meta}>Animal: {house.animal}</Text>
      <Text style={styles.meta}>Element: {house.element}</Text>
      <Text style={styles.meta}>Ghost: {house.ghost}</Text>
      <Text style={styles.meta}>Common Room: {house.commonRoom}</Text>
    </LinearGradient>
  );
}

function getColorHex(colorName: string): string {
  const colors: Record<string, string> = {
    Scarlet: "#B22222",
    Gold: "#FFD700",
    Blue: "#1E90FF",
    Bronze: "#CD7F32",
    Yellow: "#FFD60A",
    Black: "#2D3436",
    Green: "#228B22",
    Silver: "#C0C0C0",
    Red: "#FF0000",
  };

  return colors[colorName.trim()] || "#4e2e54ff";
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 12,
    padding: 16,
    marginVertical: 8,
    marginHorizontal: 12,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
  },
  name: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 6,
  },
  meta: {
    fontSize: 15,
    color: "#fff",
    marginTop: 2,
  },
});

