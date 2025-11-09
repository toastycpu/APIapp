import React from "react";
import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { useColorScheme } from "@/hooks/use-color-scheme";

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === "dark";

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: isDark ? "#FFD700" : "#4B0082",
        tabBarInactiveTintColor: isDark ? "#A9A9A9" : "#555555",
        tabBarStyle: {
          backgroundColor: isDark ? "#2E1A47" : "#D4AF37",
          height: 70,
          paddingVertical: 8,
        },
        tabBarItemStyle: {
          marginTop: 5, 
          paddingVertical: 10,
        },
        tabBarIconStyle: {
          marginBottom: 5,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="sparkles" size={28} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="houses"
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" size={28} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="spells"
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="color-wand" size={28} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
