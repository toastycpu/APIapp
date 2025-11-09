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
  const colorParts = house.houseColours
    ?.split(" and ")
    .map((c) => c.trim().toLowerCase()) || ["gray", "white"];
  const color1 = getColorHex(colorParts[0]);
  const color2 = getColorHex(colorParts[1] || colorParts[0]);

  return (
    <LinearGradient
      colors={[color1, color2]}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1.8 }}
      style={styles.card}
    >
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
    scarlet: "#B22222",
    gold: "#FFD700",
    navy: "#000080",
    bronze: "#814509ff",
    yellow: "#FFD60A",
    black: "#1e2122ff",
    green: "#1A472A",
    silver: "#C0C0C0",
    red: "#FF0000",
    blue: "#1E90FF",
    gray: "#4E4E4E",
    white: "#FFFFFF",
  };
  return colors[colorName.toLowerCase()] || "#4e2e54ff";
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 16,
    padding: 20,
    marginVertical: 10,
    marginHorizontal: 12,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
  name: {
    fontSize: 24,
    fontWeight: "700",
    color: "#fff",
    marginBottom: 10,
    textShadowColor: "rgba(0,0,0,0.5)",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 4,
  },
  meta: {
    fontSize: 16,
    color: "#fff",
    marginBottom: 4,
  },
});
