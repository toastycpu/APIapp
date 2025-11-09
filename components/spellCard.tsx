import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";

const TYPE_COLORS: Record<string, string> = {
  Charm: "#5D3A7D",
  Curse: "#7F0000",
  Jinx: "#4363B3",
  Enchantment: "#2F6B3A",
  Hex: "#4B3B30",
  Spell: "#3A0A4D",
  CounterSpell: "#002244",
  HealingSpell: "#7B2E80",
  None: "#444444",
};

const { width } = Dimensions.get("window");
const CARD_WIDTH = (width - 50) / 2;

export default function SpellCard({ spell }: { spell: any }) {
  const bgColor = TYPE_COLORS[spell.type] || TYPE_COLORS["None"];

  return (
    <View style={[styles.card, { backgroundColor: bgColor }]}>
      <View style={styles.overlay}>
        <Text style={styles.name}>{spell.name}</Text>
        <Text style={styles.meta}>{spell.type}</Text>
        {spell.effect && <Text style={styles.effect}>{spell.effect}</Text>}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 16,
    margin: 8,
    width: CARD_WIDTH,
    height: 250,
    overflow: "hidden",
    elevation: 5,
    shadowColor: "#000",
    shadowOpacity: 0.25,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
  },
  overlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 14, 
  },
  name: {
    fontSize: 18,
    fontWeight: "700",
    color: "#fef6dc",
    textShadowColor: "#FFD700",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
    textAlign: "center",
    marginBottom: 8,
    fontFamily: "serif",
  },
  meta: {
    fontSize: 14,
    color: "#ffffffff",
    fontStyle: "italic",
    marginBottom: 4,
  },
  effect: {
    fontSize: 13,
    color: "#fffcfcff",
    textAlign: "center",
    opacity: 0.85,
  },
});

