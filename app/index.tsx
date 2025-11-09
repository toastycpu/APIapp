import React, { useRef, useEffect, useState } from "react";
import { Text, TouchableOpacity, StyleSheet, Animated } from "react-native";
import { useRouter } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";

export default function StartScreen() {
  const router = useRouter();

  const fadeAnim = useRef(new Animated.Value(0)).current;
  const [showWizardText, setShowWizardText] = useState(false);

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1200,
      useNativeDriver: true,
    }).start();
  }, []);

  const handleWizardPress = () => {
    setShowWizardText(true);
    setTimeout(() => setShowWizardText(false), 9000);
  };

  return (
    <LinearGradient
      colors={['#0e1855ff', '#805ca7ff']} 
      style={styles.gradient}
    >
      <Animated.View style={[styles.container, { opacity: fadeAnim }]}>
        <Text style={styles.title}>Wizard Handbook</Text>

        <TouchableOpacity style={styles.button} onPress={handleWizardPress}>
          <Text style={styles.buttonText}>Are you a Wizard?</Text>
        </TouchableOpacity>

        {showWizardText && <Text style={styles.wizardText}>🪄 You are a wizard! shh don't let the muggles know 🪄</Text>}
      </Animated.View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 34,
    fontWeight: "700",
    color: "#FFD700",
    marginBottom: 50,
    textAlign: "center",
    fontFamily: "CinzelBold",
  },
  button: {
    backgroundColor: "#481c7aff",
    paddingVertical: 16,
    paddingHorizontal: 28,
    borderRadius: 12,
    minHeight: 44,
    minWidth: 160,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#FFD700",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 8,
  },
  buttonText: {
    color: "#f9f8f2ff",
    fontSize: 18,
    fontWeight: "600",
    fontFamily: "CinzelBold",
  },
  wizardText: {
    marginTop: 20,
    fontSize: 20,
    color: "#fcfbf6ff",
    textAlign: "center",
    fontFamily: "CinzelBold",
  },
});

